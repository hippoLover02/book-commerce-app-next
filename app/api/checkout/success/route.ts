import { NextResponse } from 'next/server';
// 購入履歴の保存
export async function POST(request: Request, response: Response) {
    try {
        // リクエストボディから購入情報を取得
        
    } catch (e) {
        console.error(e);
        return NextResponse.json(e);
    }
}