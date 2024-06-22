import { useMemo } from "react";

const ExpensiveComponent: React.FC<{ data: any }> = ({ data }) => {
    const processData = (data: any) => {
        return data.map((item: any) => ({ ...item, processed: true }));
    };

    const processedData = useMemo(() => processData(data), [data]);

    return (
        <div>
            {processedData.map((item: any, index: number) => (
                <div key={index}>{item.name}</div>
            ))}
        </div>
    );
};

export default ExpensiveComponent
