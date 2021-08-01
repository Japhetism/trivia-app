import parse from 'html-react-parser';

export const storeData = (storeType: string, data: any) => {
    localStorage.setItem(storeType, JSON.stringify(data));
}

export const retrieveData = (retrieveType: string) => {
    return JSON.parse(localStorage.getItem(retrieveType) || '');
}

export const clearData = () => {
    localStorage.clear();
}

export const htmlParser = (string: string) => {
    return parse(string);
}