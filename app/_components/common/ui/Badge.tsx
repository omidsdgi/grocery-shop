interface Badge {
    badge: string;
    price: number;
    sale_price: number;
}
export default function Badge({badge='',sale_price,price}:Badge){
return (
    <>
        {
            badge.length > 0 ? (
                <div
                    className={`badge ${badge.toLowerCase() == 'hot' ? 'badge--hot' : 'badge--sale'} absolute left-0 top-0 lg:top-5 rounded-tl-[10px] lg:rounded-tl-none`}>{badge}
                </div>
            ) : (
                <div
                    className="badge badge--off absolute left-0 top-0 lg:top-5 rounded-tl-[10px] lg:rounded-tl-none">-{Math.round((( sale_price / price) * 100))}%</div>
            )
        }
    </>
);
}

