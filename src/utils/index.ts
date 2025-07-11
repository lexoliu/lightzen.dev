export const formatDate = (date: Date, format: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};

export const fetchData = async (url: string): Promise<any> => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};