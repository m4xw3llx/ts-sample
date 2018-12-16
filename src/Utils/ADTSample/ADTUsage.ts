interface IErrorMessage {
    tag: "error";
    timestamp: number;
    message: string;
    code: number;
}

interface IWarningMessage {
    tag: "warning";
    timestamp: number;
    message: string;
}

interface IInfoMessage {
    tag: "info";
    message: string;
}

interface IUnkonw {
    tag: "unknown";
    fullLogLine: string;
}

type LogLineParseResult =
    | IErrorMessage
    | IWarningMessage
    | IInfoMessage
    | IUnkonw;

function logLineParseResult<T>(
    r: LogLineParseResult,
    f: (_: IErrorMessage) => T,
    g: (_: IWarningMessage) => T,
    h: (_: IInfoMessage) => T,
    i: (_: IUnkonw) => T
): T {
    switch (r.tag) {
        case "error":
            return f(r);
        case "warning":
            return g(r);
        case "info":
            return h(r);
        case "unknown":
            return i(r);
    }
}

// usage

const parseLogLine = (logLine: string): LogLineParseResult => {
    const words = logLine.split(" ");
    const level = words[0];
    const timestamp = parseInt(words[1], 10);
    const errorCode = parseInt(words[2], 10);

    if (level === "E" && timestamp && errorCode) {
        return {
            code: errorCode,
            message: words.slice(2).join(""),
            tag: "error",
            timestamp
        };
    } else if (level === "W" && timestamp) {
        return {
            message: words.slice(2).join(""),
            tag: "warning",
            timestamp
        };
    } else if (level === "I") {
        return {
            message: words.slice(1).join(""),
            tag: "info"
        };
    } else {
        return {
            fullLogLine: logLine,
            tag: "unknown"
        };
    }
};

const errorLogLine1 = "E 1513877434 503 Service Unavailable";
const errorLogLine2 = "E 1513878191 502 Bad Gateway";
const warningLogLine = "W 1513878016 Running low on RAM";
const garbageLogLine = "It's like love in an elevator";

const errorCodes = [
    garbageLogLine,
    warningLogLine,
    errorLogLine1,
    errorLogLine2
]
    .map(parseLogLine)
    .map(r => logLineParseResult(r, e => e.code, w => 0, i => 0, u => 0))
    .filter(r => r);

// tslint:disable-next-line:no-console
console.log(errorCodes);