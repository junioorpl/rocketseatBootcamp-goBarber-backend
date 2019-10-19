import 'dotenv/config';

import Queue from './lib/Queue';

// Fila roda em outro servidor de node.js
Queue.processQueue();
