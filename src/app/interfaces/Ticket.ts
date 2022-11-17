export interface Ticket {
    id?: number,
    openedBy: string,
    issue: string,
    resolvedBy: string,
    resolution: string,
    resolved: boolean;
    favorited: boolean;
}