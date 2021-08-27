/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // testResultsProcessor:'./testReport',
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        //输出页面标题
        pageTitle: 'Test Report',
        //插件将会输出的HTML报告的路径。
        outputPath:'testReport/JesttestReport.html',
        //为每个失败的测试输出详细的失败消息。
        includeFailureMsg: true,
      },
    ],
  ]
};