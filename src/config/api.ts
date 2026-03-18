const BASE_PATH = '/test-task-for-JL/';

export const API_URLS = {
  projects: `${BASE_PATH}data/projects.json`,
  users: `${BASE_PATH}data/users.json`,
  tasks: `${BASE_PATH}data/tasks.json`
} as const;