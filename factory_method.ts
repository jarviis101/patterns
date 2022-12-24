interface LoggerInterface {
    write(message: string): void
}

class SlackLogger implements LoggerInterface {
    write(message: string): void {
        console.log(`write into slack ${message}`);
    }
}

class StdoutLogger implements LoggerInterface {
    write(message: string): void {
        console.log(`write into stdout ${message}`);
    }
}

abstract class LoggerCreator {
    getCreatedLogger(): LoggerInterface {
        return this.createLogger();
    }
    abstract createLogger(): LoggerInterface;
}

class SlackLoggerCreator extends LoggerCreator {
    createLogger(): LoggerInterface {
        return new SlackLogger();
    }
}

class StdoutLoggerCreator extends LoggerCreator {
    createLogger(): LoggerInterface {
        return new StdoutLogger();
    }
}
/** ----------------------------------------------------------- */

function getLoggerByCreator(creator: LoggerCreator) {
    return creator.getCreatedLogger();
}
const logger = getLoggerByCreator(new SlackLoggerCreator());
logger.write('some error');
