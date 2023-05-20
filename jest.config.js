const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir : './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {

  setupFilesAfterEnv : [ "<rootDir>/setupTests.ts" ] ,

  testEnvironment: 'jest-environment-jsdom',

  moduleNameMapper: {
    '\\.(css|less|scss|png)$': 'identity-obj-proxy',

    // 配置 Next.js 特定模組路徑
    "@controller/(.*)" : "<rootDir>/components/controller/$1",
    "@layout/(.*)"     : "<rootDir>/components/layout/$1",
    "@service/(.*)"    : "<rootDir>/components/service/$1",
    
    "@reducer/(.*)"    : "<rootDir>/store/reducers/$1",

    "@utils/(.*)"      : "<rootDir>/utils/$1" ,
    // "utils/(.*)"    : "<rootDir>/utils/$1" ,
    // "^utils/(.*)$"  : "<rootDir>/utils/$1" ,

    "@rq_keys/(.*)"    : "<rootDir>/utils/react-query/keys/$1" ,
    "@rq_hooks/(.*)"    : "<rootDir>/utils/react-query/hooks/$1" ,
    
    "@hooks/(.*)"    : "<rootDir>/hooks/$1" ,

    "@api/(.*)"        : "<rootDir>/utils/api/$1" ,
    
    "@/(.*)(.*)"       : "<rootDir>/$1$2" ,

  },

}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig( customJestConfig ) 

