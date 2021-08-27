# 简单的websocket工具

我在[vueuse](https://vueuse.org)中发现了一个比较简单好用的[websocket工具函数](https://vueuse.org/core/useWebSocket/),可以快速的在不太复杂的websocket的场景中使用.

## 使用方法

```ts
import { useWebSocket } from '@vueuse/core'

const { status, data, send, open, close } = useWebSocket('ws://websocketurl')
```

可以通过皆苦描述来看看他怎么使用

```ts
export declare type WebSocketStatus = "OPEN" | "CONNECTING" | "CLOSED"
export interface WebSocketOptions {
  // websocket连接后又的回调
  onConnected?: (ws: WebSocket) => void
  // websocket断开连接后的回调
  onDisconnected?: (ws: WebSocket, event: CloseEvent) => void
  // 产生错误后的回调
  onError?: (ws: WebSocket, event: Event) => void
  // 接收到信息时的回调
  onMessage?: (ws: WebSocket, event: MessageEvent) => void
  /**
   * 是否启用心跳连接
   *
   * @default false
   */
  heartbeat?:
    | boolean
    | {
        /**
         * 设置心跳连接时要发送的内容
         *
         * @default 'ping'
         */
        message?: string
        /**
         * 设置每隔xx秒发送一次心跳连接
         *
         * @default 1000
         */
        interval?: number
      }
  /**
   * 是否启用自动重连
   *
   * @default false
   */
  autoReconnect?:
    | boolean
    | {
        /**
         * 设置最大重连次数
         *
         * @default -1
         */
        retries?: number
        /**
         * 设置每次重连的间隔时间
         *
         * @default 1000
         */
        delay?: number
        /**
         * 设置达到最大重连次数之后的回调函数
         */
        onFailed?: Fn
      }
  /**
   * 是否启用自动连接
   *
   * @default true
   */
  immediate?: boolean
}
export interface WebSocketResult<T> {
  /**
   * 获取websocket返回的结果的引用,可以监听他的变化
   */
  data: Ref<T | null>
  /**
   * 获取websocket的连接状态
   * 'OPEN', 'CONNECTING', 'CLOSED'
   */
  status: Ref<WebSocketStatus>
  /**
   * 关闭websocket连接
   */
  close: WebSocket["close"]
  /**
   * 重新打开一个新链接
   * 如果当前连接是活动的,则关闭当前活动的连接,打开一个新的连接
   */
  open: Fn
  /**
   * 通过websocket连接发送信息
   *
   * @param data
   * @param useBuffer 当套接字还没有打开时，将数据存储到缓冲区中并发送一个连接的数据。默认为true(不太明白是什么意思)
   */
  send: (data: string | ArrayBuffer | Blob, useBuffer?: boolean) => boolean
  /**
   * 返回一个websocket的引用
   */
  ws: Ref<WebSocket | undefined>
}
/**
 * websocket的参数说明
 *
 * @see /useWebSocket
 * @param url
 */
export declare function useWebSocket<Data = any>(
  url: string,
  options?: WebSocketOptions
): WebSocketResult<Data>
```