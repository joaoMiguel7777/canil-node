import { Request, Response } from "express";


export const search = (req: Request, res: Response) => {
	const q = (req.query.q as string) || '';
	res.send(`Resultado da busca: ${q}`);
}