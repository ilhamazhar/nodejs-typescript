import type { NextFunction, Request, Response } from 'express';
import express from 'express';

import { googleSearch } from './service';

const router = express.Router();

router.get('/social-media/search', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const q = String(req.query.q || '').trim();

    const limit = req.query.limit ? Math.min(10, Math.max(1, Number(req.query.limit))) : 10;
    const page = req.query.page ? Math.max(1, Number(req.query.page)) : 1;

    const start = 1 + (page - 1) * limit;

    const data = await googleSearch(q, start, limit);

    res.json({
      success: true,
      message: 'Search completed successfully',
      query: q,
      data: data.items,
      pagination: {
        page,
        limit,
      },
    });
  } catch (err) {
    next(err);
  }
});

export default router;
