import { ResponseStatus, StatusCode, SuccessResponse } from "../../../src/core/ApiResponse";
import { Response } from "express";



describe('ApiResponse class test', () => {
    describe('SuccesResponse class tests', () => {
        type SuccessResponseDataType = {
            key: string
        };
        const SUCCESS_REPONSE_MESSAGE = 'successReponseMessage';
        let successResponse: SuccessResponse<SuccessResponseDataType>;

        beforeEach(() => {
            successResponse = new SuccessResponse(SUCCESS_REPONSE_MESSAGE, { key: 'value' })
        })

        it('extends abstract ApiResponse', () => {
            expect(successResponse.getStatus()).toEqual(StatusCode.SUCCESS);
            expect(successResponse.getStatusCode()).toEqual(ResponseStatus.SUCCESS);
            expect(successResponse.getMessage()).toEqual(SUCCESS_REPONSE_MESSAGE);
            expect(typeof successResponse.send).toEqual('function');
        })

        it('should send a valid response', () => {
            const res: Response
            expect(successResponse.send(res))
        })
    })
})