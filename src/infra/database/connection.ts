export default interface DbConnection {
    connect(): Promise<void>
    disconnect(): Promise<void>
};
