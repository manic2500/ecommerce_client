
export interface ErrorResponse {
    status: number
    data: ErrorData
}
interface ErrorData {
    success: boolean;
    httpStatus: number;
    statusCode: number;
    message: string;
    errors: string[] | null;
    stack: string;
}
