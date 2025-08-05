const logStore = [];

export const customLogger = (type, message, meta = {}) => {
  const logEntry = {
    timestamp: new Date().toISOString(),
    type,
    message,
    meta,
  };
  logStore.push(logEntry);
};

export const getLogs = () => logStore;