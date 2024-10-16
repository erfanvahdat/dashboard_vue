{
    code: 'ERR_BAD_REQUEST',
    config: {
      transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      },
      adapter: [ 'xhr', 'http', 'fetch' ],
      transformRequest: [ [Function: transformRequest] ],
      transformResponse: [ [Function: transformResponse] ],
      timeout: 0,
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
      maxContentLength: -1,
      maxBodyLength: -1,
      env: {
        FormData: [Function: FormData] {
          LINE_BREAK: '\r\n',
          DEFAULT_CONTENT_TYPE: 'application/octet-stream'
        },
        Blob: [class Blob]
      },
      validateStatus: [Function: validateStatus],
      headers: Object [AxiosHeaders] {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'User-Agent': 'axios/1.7.7',
        'Content-Length': '132',
        'Accept-Encoding': 'gzip, compress, deflate, br'
      },
      method: 'post',
      url: 'http://localhost:3005/api/trade_order',
      data: '{"symbol":"SAND-USDT","limitprice":0.263515073983782,"slprice":0.260753055012458,"tpprice":0.269166714752397,"type":"LONG","risk":1}'
    },
    request: <ref *3> ClientRequest {
      _events: [Object: null prototype] {
        abort: [Function (anonymous)],
        aborted: [Function (anonymous)],
        connect: [Function (anonymous)],
        error: [Function (anonymous)],
        socket: [Function (anonymous)],
        timeout: [Function (anonymous)],
        finish: [Function: requestOnFinish]
      },
      _eventsCount: 7,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: true,
      _last: false,
      chunkedEncoding: false,
      shouldKeepAlive: true,
      maxRequestsOnConnectionReached: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      strictContentLength: false,
      _contentLength: '132',
      _hasBody: true,
      _trailer: '',
      finished: true,
      _headerSent: true,
      _closed: true,
      socket: <ref *1> Socket {
        connecting: false,
        _hadError: false,
        _parent: null,
        _host: 'localhost',
        _closeAfterHandlingError: false,
        _events: {
          close: [Function: onClose],
          error: [Function: bound onceWrapper] {
            listener: [Function: freeSocketErrorListener]
          },
          prefinish: undefined,
          finish: undefined,
          drain: undefined,
          data: undefined,
          end: [Function: onReadableStreamEnd],
          readable: undefined,
          connect: undefined,
          free: [Function: onFree],
          timeout: [Function: onTimeout],
          agentRemove: [Function: onRemove]
        },
        _readableState: ReadableState {
          highWaterMark: 16384,
          buffer: [],
          bufferIndex: 0,
          length: 0,
          pipes: [],
          awaitDrainWriters: null,
          [Symbol(kState)]: 60303620
        },
        _writableState: WritableState {
          highWaterMark: 16384,
          length: 0,
          corked: 0,
          onwrite: [Function: bound onwrite],
          writelen: 0,
          bufferedIndex: 0,
          pendingcb: 0,
          [Symbol(kState)]: 17563908,
          [Symbol(kBufferedValue)]: null,
          [Symbol(kWriteCbValue)]: null
        },
        allowHalfOpen: false,
        _maxListeners: undefined,
        _eventsCount: 6,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: null,
        _server: null,
        timeout: 4000,
        parser: null,
        _httpMessage: null,
        autoSelectFamilyAttemptedAddresses: [ '::1:3005' ],
        [Symbol(async_id_symbol)]: -1,
        [Symbol(kHandle)]: TCP {
          reading: true,
          onconnection: null,
          [Symbol(owner_symbol)]: [Circular *1]
        },
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: <ref *2> Timeout {
          _idleTimeout: 4000,
          _idlePrev: TimersList {
            _idleNext: [Circular *2],
            _idlePrev: [Circular *2],
            expiry: 4344,
            id: -9007199254740989,
            msecs: 4000,
            priorityQueuePosition: 1
          },
          _idleNext: TimersList {
            _idleNext: [Circular *2],
            _idlePrev: [Circular *2],
            expiry: 4344,
            id: -9007199254740989,
            msecs: 4000,
            priorityQueuePosition: 1
          },
          _idleStart: 344,
          _onTimeout: [Function: bound ],
          _timerArgs: undefined,
          _repeat: null,
          _destroyed: false,
          [Symbol(refed)]: false,
          [Symbol(kHasPrimitive)]: false,
          [Symbol(asyncId)]: 306,
          [Symbol(triggerId)]: 304
        },
        [Symbol(kBuffer)]: null,
        [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
        [Symbol(shapeMode)]: true,
        [Symbol(kCapture)]: false,
        [Symbol(kSetNoDelay)]: true,
        [Symbol(kSetKeepAlive)]: true,
        [Symbol(kSetKeepAliveInitialDelay)]: 1,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0
      },
      _header: 'POST /api/trade_order HTTP/1.1\r\n' +
        'Accept: application/json, text/plain, */*\r\n' +
        'Content-Type: application/json\r\n' +
        'User-Agent: axios/1.7.7\r\n' +
        'Content-Length: 132\r\n' +
        'Accept-Encoding: gzip, compress, deflate, br\r\n' +
        'Host: localhost:3005\r\n' +
        'Connection: keep-alive\r\n' +
        '\r\n',
      _keepAliveTimeout: 0,
      _onPendingData: [Function: nop],
      agent: Agent {
        _events: [Object: null prototype] {
          free: [Function (anonymous)],
          newListener: [Function: maybeEnableKeylog]
        },
        _eventsCount: 2,
        _maxListeners: undefined,
        defaultPort: 80,
        protocol: 'http:',
        options: [Object: null prototype] {
          keepAlive: true,
          scheduling: 'lifo',
          timeout: 5000,
          noDelay: true,
          path: null
        },
        requests: [Object: null prototype] {},
        sockets: [Object: null prototype] {},
        freeSockets: [Object: null prototype] {
          'localhost:3005:': [
            <ref *1> Socket {
              connecting: false,
              _hadError: false,
              _parent: null,
              _host: 'localhost',
              _closeAfterHandlingError: false,
              _events: [Object],
              _readableState: [ReadableState],
              _writableState: [WritableState],
              allowHalfOpen: false,
              _maxListeners: undefined,
              _eventsCount: 6,
              _sockname: null,
              _pendingData: null,
              _pendingEncoding: '',
              server: null,
              _server: null,
              timeout: 4000,
              parser: null,
              _httpMessage: null,
              autoSelectFamilyAttemptedAddresses: [Array],
              [Symbol(async_id_symbol)]: -1,
              [Symbol(kHandle)]: [TCP],
              [Symbol(lastWriteQueueSize)]: 0,
              [Symbol(timeout)]: [Timeout],
              [Symbol(kBuffer)]: null,
              [Symbol(kBufferCb)]: null,
              [Symbol(kBufferGen)]: null,
              [Symbol(shapeMode)]: true,
              [Symbol(kCapture)]: false,
              [Symbol(kSetNoDelay)]: true,
              [Symbol(kSetKeepAlive)]: true,
              [Symbol(kSetKeepAliveInitialDelay)]: 1,
              [Symbol(kBytesRead)]: 0,
              [Symbol(kBytesWritten)]: 0
            }
          ]
        },
        keepAliveMsecs: 1000,
        keepAlive: true,
        maxSockets: Infinity,
        maxFreeSockets: 256,
        scheduling: 'lifo',
        maxTotalSockets: Infinity,
        totalSocketCount: 1,
        [Symbol(shapeMode)]: false,
        [Symbol(kCapture)]: false
      },
      socketPath: undefined,
      method: 'POST',
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      joinDuplicateHeaders: undefined,
      path: '/api/trade_order',
      _ended: true,
      res: IncomingMessage {
        _events: {
          close: undefined,
          error: [Function: handleStreamError],
          data: [Function: handleStreamData],
          end: [ [Function: responseOnEnd], [Function: handleStreamEnd] ],       
          readable: undefined,
          finish: undefined,
          aborted: [Function: handlerStreamAborted]
        },
        _readableState: ReadableState {
          highWaterMark: 16384,
          buffer: [],
          bufferIndex: 0,
          length: 0,
          pipes: [],
          awaitDrainWriters: null,
          [Symbol(kState)]: 194779004
        },
        _maxListeners: undefined,
        socket: null,
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: '1.1',
        complete: true,
        rawHeaders: [
          'X-Powered-By',
          'Express',
          'Access-Control-Allow-Origin',
          'http://localhost:5170',
          'Vary',
          'Origin',
          'Access-Control-Allow-Credentials',
          'true',
          'Content-Type',
          'application/json; charset=utf-8',
          'Content-Length',
          '73',
          'ETag',
          'W/"49-1LATL7Yxe3r5ic/3c+aFZ0DoyBA"',
          'Date',
          'Sat, 12 Oct 2024 17:09:27 GMT',
          'Connection',
          'keep-alive',
          'Keep-Alive',
          'timeout=5'
        ],
        rawTrailers: [],
        joinDuplicateHeaders: undefined,
        aborted: false,
        upgrade: false,
        url: '',
        method: null,
        statusCode: 400,
        statusMessage: 'Bad Request',
        client: <ref *1> Socket {
          connecting: false,
          _hadError: false,
          _parent: null,
          _host: 'localhost',
          _closeAfterHandlingError: false,
          _events: {
            close: [Function: onClose],
            error: [Function: bound onceWrapper] {
              listener: [Function: freeSocketErrorListener]
            },
            prefinish: undefined,
            finish: undefined,
            drain: undefined,
            data: undefined,
            end: [Function: onReadableStreamEnd],
            readable: undefined,
            connect: undefined,
            free: [Function: onFree],
            timeout: [Function: onTimeout],
            agentRemove: [Function: onRemove]
          },
          _readableState: ReadableState {
            highWaterMark: 16384,
            buffer: [],
            bufferIndex: 0,
            length: 0,
            pipes: [],
            awaitDrainWriters: null,
            [Symbol(kState)]: 60303620
          },
          _writableState: WritableState {
            highWaterMark: 16384,
            length: 0,
            corked: 0,
            onwrite: [Function: bound onwrite],
            writelen: 0,
            bufferedIndex: 0,
            pendingcb: 0,
            [Symbol(kState)]: 17563908,
            [Symbol(kBufferedValue)]: null,
            [Symbol(kWriteCbValue)]: null
          },
          allowHalfOpen: false,
          _maxListeners: undefined,
          _eventsCount: 6,
          _sockname: null,
          _pendingData: null,
          _pendingEncoding: '',
          server: null,
          _server: null,
          timeout: 4000,
          parser: null,
          _httpMessage: null,
          autoSelectFamilyAttemptedAddresses: [ '::1:3005' ],
          [Symbol(async_id_symbol)]: -1,
          [Symbol(kHandle)]: TCP {
            reading: true,
            onconnection: null,
            [Symbol(owner_symbol)]: [Circular *1]
          },
          [Symbol(lastWriteQueueSize)]: 0,
          [Symbol(timeout)]: <ref *2> Timeout {
            _idleTimeout: 4000,
            _idlePrev: TimersList {
              _idleNext: [Circular *2],
              _idlePrev: [Circular *2],
              expiry: 4344,
              id: -9007199254740989,
              msecs: 4000,
              priorityQueuePosition: 1
            },
            _idleNext: TimersList {
              _idleNext: [Circular *2],
              _idlePrev: [Circular *2],
              expiry: 4344,
              id: -9007199254740989,
              msecs: 4000,
              priorityQueuePosition: 1
            },
            _idleStart: 344,
            _onTimeout: [Function: bound ],
            _timerArgs: undefined,
            _repeat: null,
            _destroyed: false,
            [Symbol(refed)]: false,
            [Symbol(kHasPrimitive)]: false,
            [Symbol(asyncId)]: 306,
            [Symbol(triggerId)]: 304
          },
          [Symbol(kBuffer)]: null,
          [Symbol(kBufferCb)]: null,
          [Symbol(kBufferGen)]: null,
          [Symbol(shapeMode)]: true,
          [Symbol(kCapture)]: false,
          [Symbol(kSetNoDelay)]: true,
          [Symbol(kSetKeepAlive)]: true,
          [Symbol(kSetKeepAliveInitialDelay)]: 1,
          [Symbol(kBytesRead)]: 0,
          [Symbol(kBytesWritten)]: 0
        },
        _consuming: false,
        _dumped: false,
        req: [Circular *3],
        _eventsCount: 4,
        responseUrl: 'http://localhost:3005/api/trade_order',
        redirects: [],
        [Symbol(shapeMode)]: true,
        [Symbol(kCapture)]: false,
        [Symbol(kHeaders)]: {
          'x-powered-by': 'Express',
          'access-control-allow-origin': 'http://localhost:5170',
          vary: 'Origin',
          'access-control-allow-credentials': 'true',
          'content-type': 'application/json; charset=utf-8',
          'content-length': '73',
          etag: 'W/"49-1LATL7Yxe3r5ic/3c+aFZ0DoyBA"',
          date: 'Sat, 12 Oct 2024 17:09:27 GMT',
          connection: 'keep-alive',
          'keep-alive': 'timeout=5'
        },
        [Symbol(kHeadersCount)]: 20,
        [Symbol(kTrailers)]: null,
        [Symbol(kTrailersCount)]: 0
      },
      aborted: false,
      timeoutCb: null,
      upgradeOrConnect: false,
      parser: null,
      maxHeadersCount: null,
      reusedSocket: false,
      host: 'localhost',
      protocol: 'http:',
      _redirectable: Writable {
        _events: {
          close: undefined,
          error: [Function: handleRequestError],
          prefinish: undefined,
          finish: undefined,
          drain: undefined,
          response: [Function: handleResponse],
          socket: [Function: handleRequestSocket]
        },
        _writableState: WritableState {
          highWaterMark: 16384,
          length: 0,
          corked: 0,
          onwrite: [Function: bound onwrite],
          writelen: 0,
          bufferedIndex: 0,
          pendingcb: 0,
          [Symbol(kState)]: 17580812,
          [Symbol(kBufferedValue)]: null
        },
        _maxListeners: undefined,
        _options: {
          maxRedirects: 21,
          maxBodyLength: Infinity,
          protocol: 'http:',
          path: '/api/trade_order',
          method: 'POST',
          headers: [Object: null prototype] {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'User-Agent': 'axios/1.7.7',
            'Content-Length': '132',
            'Accept-Encoding': 'gzip, compress, deflate, br'
          },
          agents: { http: undefined, https: undefined },
          auth: undefined,
          family: undefined,
          beforeRedirect: [Function: dispatchBeforeRedirect],
          beforeRedirects: { proxy: [Function: beforeRedirect] },
          hostname: 'localhost',
          port: '3005',
          agent: undefined,
          nativeProtocols: {
            'http:': {
              _connectionListener: [Function: connectionListener],
              METHODS: [Array],
              STATUS_CODES: [Object],
              Agent: [Function],
              ClientRequest: [Function: ClientRequest],
              IncomingMessage: [Function: IncomingMessage],
              OutgoingMessage: [Function: OutgoingMessage],
              Server: [Function: Server],
              ServerResponse: [Function: ServerResponse],
              createServer: [Function: createServer],
              validateHeaderName: [Function],
              validateHeaderValue: [Function],
              get: [Function: get],
              request: [Function: request],
              setMaxIdleHTTPParsers: [Function: setMaxIdleHTTPParsers],
              maxHeaderSize: [Getter],
              globalAgent: [Getter/Setter]
            },
            'https:': {
              Agent: [Function: Agent],
              globalAgent: [Agent],
              Server: [Function: Server],
              createServer: [Function: createServer],
              get: [Function: get],
              request: [Function: request]
            }
          },
          pathname: '/api/trade_order'
        },
        _ended: true,
        _ending: true,
        _redirectCount: 0,
        _redirects: [],
        _requestBodyLength: 132,
        _requestBodyBuffers: [],
        _eventsCount: 3,
        _onNativeResponse: [Function (anonymous)],
        _currentRequest: [Circular *3],
        _currentUrl: 'http://localhost:3005/api/trade_order',
        [Symbol(shapeMode)]: true,
        [Symbol(kCapture)]: false
      },
      [Symbol(shapeMode)]: false,
      [Symbol(kCapture)]: false,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: [Object: null prototype] {
        accept: [ 'Accept', 'application/json, text/plain, */*' ],
        'content-type': [ 'Content-Type', 'application/json' ],
        'user-agent': [ 'User-Agent', 'axios/1.7.7' ],
        'content-length': [ 'Content-Length', '132' ],
        'accept-encoding': [ 'Accept-Encoding', 'gzip, compress, deflate, br' ], 
        host: [ 'Host', 'localhost:3005' ]
      },
      [Symbol(errored)]: null,
      [Symbol(kHighWaterMark)]: 16384,
      [Symbol(kRejectNonStandardBodyWrites)]: false,
      [Symbol(kUniqueHeaders)]: null
    },
    response: {
      status: 400,
      statusText: 'Bad Request',
      headers: Object [AxiosHeaders] {
        'x-powered-by': 'Express',
        'access-control-allow-origin': 'http://localhost:5170',
        vary: 'Origin',
        'access-control-allow-credentials': 'true',
        'content-type': 'application/json; charset=utf-8',
        'content-length': '73',
        etag: 'W/"49-1LATL7Yxe3r5ic/3c+aFZ0DoyBA"',
        date: 'Sat, 12 Oct 2024 17:09:27 GMT',
        connection: 'keep-alive',
        'keep-alive': 'timeout=5'
      },
      config: {
        transitional: {
          silentJSONParsing: true,
          forcedJSONParsing: true,
          clarifyTimeoutError: false
        },
        adapter: [ 'xhr', 'http', 'fetch' ],
        transformRequest: [ [Function: transformRequest] ],
        transformResponse: [ [Function: transformResponse] ],
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
          FormData: [Function: FormData] {
            LINE_BREAK: '\r\n',
            DEFAULT_CONTENT_TYPE: 'application/octet-stream'
          },
          Blob: [class Blob]
        },
        validateStatus: [Function: validateStatus],
        headers: Object [AxiosHeaders] {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'User-Agent': 'axios/1.7.7',
          'Content-Length': '132',
          'Accept-Encoding': 'gzip, compress, deflate, br'
        },
        method: 'post',
        url: 'http://localhost:3005/api/trade_order',
        data: '{"symbol":"SAND-USDT","limitprice":0.263515073983782,"slprice":0.260753055012458,"tpprice":0.269166714752397,"type":"LONG","risk":1}'
      },
      request: <ref *3> ClientRequest {
        _events: [Object: null prototype] {
          abort: [Function (anonymous)],
          aborted: [Function (anonymous)],
          connect: [Function (anonymous)],
          error: [Function (anonymous)],
          socket: [Function (anonymous)],
          timeout: [Function (anonymous)],
          finish: [Function: requestOnFinish]
        },
        _eventsCount: 7,
        _maxListeners: undefined,
        outputData: [],
        outputSize: 0,
        writable: true,
        destroyed: true,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        maxRequestsOnConnectionReached: false,
        _defaultKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: false,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        strictContentLength: false,
        _contentLength: '132',
        _hasBody: true,
        _trailer: '',
        finished: true,
        _headerSent: true,
        _closed: true,
        socket: <ref *1> Socket {
          connecting: false,
          _hadError: false,
          _parent: null,
          _host: 'localhost',
          _closeAfterHandlingError: false,
          _events: {
            close: [Function: onClose],
            error: [Function: bound onceWrapper] {
              listener: [Function: freeSocketErrorListener]
            },
            prefinish: undefined,
            finish: undefined,
            drain: undefined,
            data: undefined,
            end: [Function: onReadableStreamEnd],
            readable: undefined,
            connect: undefined,
            free: [Function: onFree],
            timeout: [Function: onTimeout],
            agentRemove: [Function: onRemove]
          },
          _readableState: ReadableState {
            highWaterMark: 16384,
            buffer: [],
            bufferIndex: 0,
            length: 0,
            pipes: [],
            awaitDrainWriters: null,
            [Symbol(kState)]: 60303620
          },
          _writableState: WritableState {
            highWaterMark: 16384,
            length: 0,
            corked: 0,
            onwrite: [Function: bound onwrite],
            writelen: 0,
            bufferedIndex: 0,
            pendingcb: 0,
            [Symbol(kState)]: 17563908,
            [Symbol(kBufferedValue)]: null,
            [Symbol(kWriteCbValue)]: null
          },
          allowHalfOpen: false,
          _maxListeners: undefined,
          _eventsCount: 6,
          _sockname: null,
          _pendingData: null,
          _pendingEncoding: '',
          server: null,
          _server: null,
          timeout: 4000,
          parser: null,
          _httpMessage: null,
          autoSelectFamilyAttemptedAddresses: [ '::1:3005' ],
          [Symbol(async_id_symbol)]: -1,
          [Symbol(kHandle)]: TCP {
            reading: true,
            onconnection: null,
            [Symbol(owner_symbol)]: [Circular *1]
          },
          [Symbol(lastWriteQueueSize)]: 0,
          [Symbol(timeout)]: <ref *2> Timeout {
            _idleTimeout: 4000,
            _idlePrev: TimersList {
              _idleNext: [Circular *2],
              _idlePrev: [Circular *2],
              expiry: 4344,
              id: -9007199254740989,
              msecs: 4000,
              priorityQueuePosition: 1
            },
            _idleNext: TimersList {
              _idleNext: [Circular *2],
              _idlePrev: [Circular *2],
              expiry: 4344,
              id: -9007199254740989,
              msecs: 4000,
              priorityQueuePosition: 1
            },
            _idleStart: 344,
            _onTimeout: [Function: bound ],
            _timerArgs: undefined,
            _repeat: null,
            _destroyed: false,
            [Symbol(refed)]: false,
            [Symbol(kHasPrimitive)]: false,
            [Symbol(asyncId)]: 306,
            [Symbol(triggerId)]: 304
          },
          [Symbol(kBuffer)]: null,
          [Symbol(kBufferCb)]: null,
          [Symbol(kBufferGen)]: null,
          [Symbol(shapeMode)]: true,
          [Symbol(kCapture)]: false,
          [Symbol(kSetNoDelay)]: true,
          [Symbol(kSetKeepAlive)]: true,
          [Symbol(kSetKeepAliveInitialDelay)]: 1,
          [Symbol(kBytesRead)]: 0,
          [Symbol(kBytesWritten)]: 0
        },
        _header: 'POST /api/trade_order HTTP/1.1\r\n' +
          'Accept: application/json, text/plain, */*\r\n' +
          'Content-Type: application/json\r\n' +
          'User-Agent: axios/1.7.7\r\n' +
          'Content-Length: 132\r\n' +
          'Accept-Encoding: gzip, compress, deflate, br\r\n' +
          'Host: localhost:3005\r\n' +
          'Connection: keep-alive\r\n' +
          '\r\n',
        _keepAliveTimeout: 0,
        _onPendingData: [Function: nop],
        agent: Agent {
          _events: [Object: null prototype] {
            free: [Function (anonymous)],
            newListener: [Function: maybeEnableKeylog]
          },
          _eventsCount: 2,
          _maxListeners: undefined,
          defaultPort: 80,
          protocol: 'http:',
          options: [Object: null prototype] {
            keepAlive: true,
            scheduling: 'lifo',
            timeout: 5000,
            noDelay: true,
            path: null
          },
          requests: [Object: null prototype] {},
          sockets: [Object: null prototype] {},
          freeSockets: [Object: null prototype] { 'localhost:3005:': [ [Socket] ] },
          keepAliveMsecs: 1000,
          keepAlive: true,
          maxSockets: Infinity,
          maxFreeSockets: 256,
          scheduling: 'lifo',
          maxTotalSockets: Infinity,
          totalSocketCount: 1,
          [Symbol(shapeMode)]: false,
          [Symbol(kCapture)]: false
        },
        socketPath: undefined,
        method: 'POST',
        maxHeaderSize: undefined,
        insecureHTTPParser: undefined,
        joinDuplicateHeaders: undefined,
        path: '/api/trade_order',
        _ended: true,
        res: IncomingMessage {
          _events: {
            close: undefined,
            error: [Function: handleStreamError],
            data: [Function: handleStreamData],
            end: [ [Function: responseOnEnd], [Function: handleStreamEnd] ],     
            readable: undefined,
            finish: undefined,
            aborted: [Function: handlerStreamAborted]
          },
          _readableState: ReadableState {
            highWaterMark: 16384,
            buffer: [],
            bufferIndex: 0,
            length: 0,
            pipes: [],
            awaitDrainWriters: null,
            [Symbol(kState)]: 194779004
          },
          _maxListeners: undefined,
          socket: null,
          httpVersionMajor: 1,
          httpVersionMinor: 1,
          httpVersion: '1.1',
          complete: true,
          rawHeaders: [
            'X-Powered-By',
            'Express',
            'Access-Control-Allow-Origin',
            'http://localhost:5170',
            'Vary',
            'Origin',
            'Access-Control-Allow-Credentials',
            'true',
            'Content-Type',
            'application/json; charset=utf-8',
            'Content-Length',
            '73',
            'ETag',
            'W/"49-1LATL7Yxe3r5ic/3c+aFZ0DoyBA"',
            'Date',
            'Sat, 12 Oct 2024 17:09:27 GMT',
            'Connection',
            'keep-alive',
            'Keep-Alive',
            'timeout=5'
          ],
          rawTrailers: [],
          joinDuplicateHeaders: undefined,
          aborted: false,
          upgrade: false,
          url: '',
          method: null,
          statusCode: 400,
          statusMessage: 'Bad Request',
          client: <ref *1> Socket {
            connecting: false,
            _hadError: false,
            _parent: null,
            _host: 'localhost',
            _closeAfterHandlingError: false,
            _events: {
              close: [Function: onClose],
              error: [Function],
              prefinish: undefined,
              finish: undefined,
              drain: undefined,
              data: undefined,
              end: [Function: onReadableStreamEnd],
              readable: undefined,
              connect: undefined,
              free: [Function: onFree],
              timeout: [Function: onTimeout],
              agentRemove: [Function: onRemove]
            },
            _readableState: ReadableState {
              highWaterMark: 16384,
              buffer: [],
              bufferIndex: 0,
              length: 0,
              pipes: [],
              awaitDrainWriters: null,
              [Symbol(kState)]: 60303620
            },
            _writableState: WritableState {
              highWaterMark: 16384,
              length: 0,
              corked: 0,
              onwrite: [Function: bound onwrite],
              writelen: 0,
              bufferedIndex: 0,
              pendingcb: 0,
              [Symbol(kState)]: 17563908,
              [Symbol(kBufferedValue)]: null,
              [Symbol(kWriteCbValue)]: null
            },
            allowHalfOpen: false,
            _maxListeners: undefined,
            _eventsCount: 6,
            _sockname: null,
            _pendingData: null,
            _pendingEncoding: '',
            server: null,
            _server: null,
            timeout: 4000,
            parser: null,
            _httpMessage: null,
            autoSelectFamilyAttemptedAddresses: [ '::1:3005' ],
            [Symbol(async_id_symbol)]: -1,
            [Symbol(kHandle)]: TCP {
              reading: true,
              onconnection: null,
              [Symbol(owner_symbol)]: [Circular *1]
            },
            [Symbol(lastWriteQueueSize)]: 0,
            [Symbol(timeout)]: <ref *2> Timeout {
              _idleTimeout: 4000,
              _idlePrev: [TimersList],
              _idleNext: [TimersList],
              _idleStart: 344,
              _onTimeout: [Function: bound ],
              _timerArgs: undefined,
              _repeat: null,
              _destroyed: false,
              [Symbol(refed)]: false,
              [Symbol(kHasPrimitive)]: false,
              [Symbol(asyncId)]: 306,
              [Symbol(triggerId)]: 304
            },
            [Symbol(kBuffer)]: null,
            [Symbol(kBufferCb)]: null,
            [Symbol(kBufferGen)]: null,
            [Symbol(shapeMode)]: true,
            [Symbol(kCapture)]: false,
            [Symbol(kSetNoDelay)]: true,
            [Symbol(kSetKeepAlive)]: true,
            [Symbol(kSetKeepAliveInitialDelay)]: 1,
            [Symbol(kBytesRead)]: 0,
            [Symbol(kBytesWritten)]: 0
          },
          _consuming: false,
          _dumped: false,
          req: [Circular *3],
          _eventsCount: 4,
          responseUrl: 'http://localhost:3005/api/trade_order',
          redirects: [],
          [Symbol(shapeMode)]: true,
          [Symbol(kCapture)]: false,
          [Symbol(kHeaders)]: {
            'x-powered-by': 'Express',
            'access-control-allow-origin': 'http://localhost:5170',
            vary: 'Origin',
            'access-control-allow-credentials': 'true',
            'content-type': 'application/json; charset=utf-8',
            'content-length': '73',
            etag: 'W/"49-1LATL7Yxe3r5ic/3c+aFZ0DoyBA"',
            date: 'Sat, 12 Oct 2024 17:09:27 GMT',
            connection: 'keep-alive',
            'keep-alive': 'timeout=5'
          },
          [Symbol(kHeadersCount)]: 20,
          [Symbol(kTrailers)]: null,
          [Symbol(kTrailersCount)]: 0
        },
        aborted: false,
        timeoutCb: null,
        upgradeOrConnect: false,
        parser: null,
        maxHeadersCount: null,
        reusedSocket: false,
        host: 'localhost',
        protocol: 'http:',
        _redirectable: Writable {
          _events: {
            close: undefined,
            error: [Function: handleRequestError],
            prefinish: undefined,
            finish: undefined,
            drain: undefined,
            response: [Function: handleResponse],
            socket: [Function: handleRequestSocket]
          },
          _writableState: WritableState {
            highWaterMark: 16384,
            length: 0,
            corked: 0,
            onwrite: [Function: bound onwrite],
            writelen: 0,
            bufferedIndex: 0,
            pendingcb: 0,
            [Symbol(kState)]: 17580812,
            [Symbol(kBufferedValue)]: null
          },
          _maxListeners: undefined,
          _options: {
            maxRedirects: 21,
            maxBodyLength: Infinity,
            protocol: 'http:',
            path: '/api/trade_order',
            method: 'POST',
            headers: [Object: null prototype] {
              Accept: 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
              'User-Agent': 'axios/1.7.7',
              'Content-Length': '132',
              'Accept-Encoding': 'gzip, compress, deflate, br'
            },
            agents: { http: undefined, https: undefined },
            auth: undefined,
            family: undefined,
            beforeRedirect: [Function: dispatchBeforeRedirect],
            beforeRedirects: { proxy: [Function: beforeRedirect] },
            hostname: 'localhost',
            port: '3005',
            agent: undefined,
            nativeProtocols: { 'http:': [Object], 'https:': [Object] },
            pathname: '/api/trade_order'
          },
          _ended: true,
          _ending: true,
          _redirectCount: 0,
          _redirects: [],
          _requestBodyLength: 132,
          _requestBodyBuffers: [],
          _eventsCount: 3,
          _onNativeResponse: [Function (anonymous)],
          _currentRequest: [Circular *3],
          _currentUrl: 'http://localhost:3005/api/trade_order',
          [Symbol(shapeMode)]: true,
          [Symbol(kCapture)]: false
        },
        [Symbol(shapeMode)]: false,
        [Symbol(kCapture)]: false,
        [Symbol(kBytesWritten)]: 0,
        [Symbol(kNeedDrain)]: false,
        [Symbol(corked)]: 0,
        [Symbol(kOutHeaders)]: [Object: null prototype] {
          accept: [ 'Accept', 'application/json, text/plain, */*' ],
          'content-type': [ 'Content-Type', 'application/json' ],
          'user-agent': [ 'User-Agent', 'axios/1.7.7' ],
          'content-length': [ 'Content-Length', '132' ],
          'accept-encoding': [ 'Accept-Encoding', 'gzip, compress, deflate, br' ],
          host: [ 'Host', 'localhost:3005' ]
        },
        [Symbol(errored)]: null,
        [Symbol(kHighWaterMark)]: 16384,
        [Symbol(kRejectNonStandardBodyWrites)]: false,
        [Symbol(kUniqueHeaders)]: null
      },
      data: {
        msg: 'Trade_order does not work properly! ',
        data: {},
        code: 'Unknown'
      }
    },
    status: 400
  }