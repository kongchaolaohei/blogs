# VSCode 调试 TS

使用以下调试文件的配置(两个配置都可以),便可正常 TS 代码了.[更多信息](https://go.microsoft.com/fwlink/?linkid=830387)

```json
{
  // 使用 IntelliSense 了解相关属性。
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "ts-node",
      "type": "node",
      "request": "launch",
      "args": ["${relativeFile}"],
      "runtimeArgs": ["-r", "ts-node/register"],
      "cwd": "${workspaceRoot}",
      "protocol": "inspector",
      "internalConsoleOptions": "openOnSessionStart"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "调试TS代码",
      // ts-node 命令： “直接”运行ts代码。
      // 作用：调试时加载ts-node包（在调试时“直接”运行ts代码）
      "runtimeArgs": ["-r", "ts-node/register"],
      // 此处的 a.ts 表示要调试的 TS 文件（ 可修改为其他要调试的ts文件 ）
      "args": ["${workspaceFolder}/${relativeFile}"]
    }
  ]
}
```
