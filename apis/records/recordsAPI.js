const controller = require('./recordsController');
const router = require('express').Router();

module.exports = (() => {
    router.route('/')
        .post(controller.getRecords)

    return router;
})();


// ************************************* SWAGGER DOCUMENTATION
/**
* @swagger
*paths:
*  '/v1/records':
*    post:
*      summary: Retrieves records based on start date, end date, minimum and maximum count
*      tags:
*        - Records
*      requestBody:
*        content:
*          application/json:
*            schema:
*              $ref: '#/definitions/postRecordSchema'
*      responses:
*        '200':
*          description: Successfully retrieved records
*          content:
*            application/json:
*              schema:
*                $ref: '#/definitions/getRecords'
*        '400':
*          description: The request payload contains one or many errors that need to be fixed
*          content:
*            application/json:
*              schema:
*                $ref: '#/definitions/errorMessage'
*        '500':
*          description: The server returned an internal error
*          content:
*            application/json:
*              schema:
*                $ref: '#/definitions/errorMessage'
*definitions:
*    postRecordSchema:
*      type: object
*      required:
*        - startDate
*        - endDate
*        - minCount
*        - maxCount
*      properties:
*        startDate:
*          type: string
*        endDate:
*          type: string
*        minCount:
*          type: number
*        maxCount:
*          type: number
*    recordssResponseSchema:
*      type: object
*      properties:
*          id:
*            type: number
*          key:
*            type: string
*          createdAt:
*            type: string
*          totalCount:
*            type: number
*    getRecords:
*      properties:
*        code:
*          type: string
*        msg:
*          type: string
*        records:
*          type: array
*          items:
*           $ref: '#/definitions/recordssResponseSchema'
*    errorMessage:
*      properties:
*        code:
*          type: string
*        msg:
*          type: string
*        errors:
*          type: array
*          items:
*           type: string
*/