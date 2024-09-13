/*
 * @Author: JiangYiQian 10811664+jiangyiqian@user.noreply.gitee.com
 * @Date: 2024-09-13 11:36:25
 * @LastEditors: JiangYiQian 10811664+jiangyiqian@user.noreply.gitee.com
 * @LastEditTime: 2024-09-13 11:38:01
 * @FilePath: \public_cli_min\packages\myself-eslint-plugin\test\rules\no-http-url.test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use strict";

const rule = require("../../rules/no-http-url");
const { RuleTester } = require("eslint");

const ruleTester = new RuleTester();

ruleTester.run("no-http-url", rule, {
  valid: [
    {
      code: "var test = 'https://xiaojiang.com';",
    },
  ],

  invalid: [
    {
      code: "var test = 'http://xiaojiang.com';",
      output: "var test = 'http://xiaojiang.com';",
      errors: [
        {
          message: 'Recommended "http://xiaojiang.com" switch to HTTPS',
        },
      ],
    },
    {
      code: "<img src='http://xiaojiang.com' />",
      output: "<img src='http://xiaojiang.com' />",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      errors: [
        {
          message: 'Recommended "http://xiaojiang.com" switch to HTTPS',
        },
      ],
    },
  ],
});
