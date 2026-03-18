module.exports = {
  testEnvironment: 'jsdom',
  rootDir: '.',
  testMatch: [
    '**/tests/**/*.test.tsx',
    '**/?(*.)+(test).tsx'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.app.json',
      useESM: true 
    }],
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  moduleDirectories: ['node_modules', 'src'],
};