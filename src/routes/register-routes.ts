import { Router } from 'express';
import { RegisterController } from '../controllers/register-controller';

const router = Router();
const registerController = new RegisterController();

/**
 * @swagger
 * components:
 *   schemas:
 *     Register:
 *       type: object
 *       properties:
 *         physicsPerson:
 *           type: boolean
 *         juridicPerson:
 *           type: boolean
 *         cnpj:
 *           type: string
 *         cpf:
 *           type: string
 *         name:
 *           type: string
 *         fone:
 *           type: string
 *         cellphone:
 *           type: string
 *         email:
 *           type: string
 *         repeatEmail:
 *           type: string
 *         address:
 *           type: object
 *           properties:
 *             cep:
 *               type: string
 *             street:
 *               type: string
 *             number:
 *               type: integer
 *             complement:
 *               type: string
 *             city:
 *               type: string
 *             neighborhood:
 *               type: string
 *             state:
 *               type: string
 *         acceptedTerms:
 *           type: boolean
 * 
 * /register:
 *   post:
 *     summary: Register a new user
 *     tags: [Register]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Register'
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Register'
 *       400:
 *         description: Invalid request data
 *       500:
 *         description: Server error
 */
router.post('/register', registerController.createRegister);

/**
 * @swagger
 * /register:
 *   get:
 *     summary: Retrieve a register by document (CPF or CNPJ)
 *     tags: [Register]
 *     parameters:
 *       - in: query
 *         name: cpf
 *         schema:
 *           type: string
 *         required: false
 *         description: CPF of the register to retrieve
 *       - in: query
 *         name: cnpj
 *         schema:
 *           type: string
 *         required: false
 *         description: CNPJ of the register to retrieve
 *     responses:
 *       200:
 *         description: A register object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Register'
 *       404:
 *         description: Register not found
 *       500:
 *         description: Server error
 */
router.get('/register', registerController.getRegisterByDoc);

export default router;