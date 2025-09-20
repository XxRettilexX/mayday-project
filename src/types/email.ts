export interface EmailCheckResult {
    status: 'safe' | 'suspicious' | 'scam';
    message: string;
    details?: string;
}

export interface EmailState {
    email: string;
    result?: EmailCheckResult;
    isLoading: boolean;
    error?: string;
}