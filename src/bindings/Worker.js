// Generated by ReScript, PLEASE EDIT WITH CARE


function make(prim) {
  return new Worker(prim);
}

function Make(funarg) {
  return {
          make: funarg.make,
          App: {
            postMessage: (function (prim, prim$1) {
                prim.postMessage(prim$1);
                
              }),
            onMessage: (function (prim, prim$1) {
                prim.onmessage = prim$1;
                
              }),
            onError: (function (prim, prim$1) {
                prim.onerror = prim$1;
                
              }),
            terminate: (function (prim) {
                prim.terminate();
                
              })
          },
          $$Worker: {
            postMessage: (function (prim) {
                postMessage(prim);
                
              }),
            onMessage: (function (prim, prim$1) {
                prim.onmessage = prim$1;
                
              }),
            self: self,
            importScripts: (function (prim) {
                importScripts(prim);
                
              })
          }
        };
}

export {
  make ,
  Make ,
  
}
/* No side effect */
