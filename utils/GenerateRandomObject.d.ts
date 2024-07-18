declare const generateRandomColor: () => string;
declare const generateRandomSize: () => string;
declare const generateRandomPosition: () => {
    top: string;
    left: string;
};
declare const generateRandomAnimation: () => string;
declare const generateRandomDuration: () => string;
declare const generateRandomObject: () => {
    color: string;
    size: string;
    top?: string;
    left?: string;
    animation: string;
    duration: string;
};
