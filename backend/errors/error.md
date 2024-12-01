```bash
listening on port: http://localhost:5000
connected to Db
node:_http_outgoing:655
    throw new ERR_HTTP_HEADERS_SENT('set');
          ^

Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    at ServerResponse.setHeader (node:_http_outgoing:655:11)
    at ServerResponse.header (C:\Users\Njox\Documents\GitHub\kilimokacha\backend\node_modules\express\lib\response.js:794:10)
    at ServerResponse.send (C:\Users\Njox\Documents\GitHub\kilimokacha\backend\node_modules\express\lib\response.js:174:12)
    at ServerResponse.json (C:\Users\Njox\Documents\GitHub\kilimokacha\backend\node_modules\express\lib\response.js:278:15)
    at createAnnouncement (C:\Users\Njox\Documents\GitHub\kilimokacha\backend\controllers\announcement.controller.js:46:25)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  code: 'ERR_HTTP_HEADERS_SENT'
```