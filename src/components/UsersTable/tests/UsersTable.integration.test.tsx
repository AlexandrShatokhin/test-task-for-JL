import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import UsersTable from '../UsersTable';
import dataReducer from '../../../store/slices/dataSlice';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('UsersTable Tests', () => {
  const mockStore = configureStore({
    reducer: { data: dataReducer }
  });

  beforeEach(() => {
    mockedAxios.get.mockImplementation((url) => {
      if (url.includes('projects.json')) {
        return Promise.resolve({
          data: {
            data: [{ id: 1, name: 'Alpha', code: 'ALP' }]
          }
        });
      }
      if (url.includes('users.json')) {
        return Promise.resolve({
          data: {
            data: [{ id: 1, name: 'User 1' }]
          }
        });
      }
      if (url.includes('tasks.json')) {
        return Promise.resolve({
          data: {
            data: [
              { id: 1, name: 'Task 1', project_id: 1, estimate: 5, responsible_id: 1 }
            ]
          }
        });
      }
      return Promise.reject(new Error('Not found'));
    });
  });

  test('within работает с прямым импортом', async () => {
    render(
      <Provider store={mockStore}>
        <UsersTable />
      </Provider>
    );

    await screen.findByText('User 1');

    const container = screen.getByText('Список пользователей с задачами').parentElement;
    expect(container).toBeInTheDocument();

    if (container) {
      const userName = within(container).getByText('User 1');
      expect(userName).toBeInTheDocument();

      const expandIcon = within(container).getByText('⬇');
      await userEvent.click(expandIcon);

      await screen.findByText('Alpha');
      
      const projectName = within(container).getByText('Alpha');
      expect(projectName).toBeInTheDocument();
    }
  });
});