import { ReactComponent as Chart1 } from 'assets/images/Chart1.svg';
import { ReactComponent as Chart2 } from 'assets/images/Chart2.svg';
import { ReactComponent as Chart3 } from 'assets/images/Chart3.svg';
import { ReactComponent as Map } from 'assets/images/map.svg';
import { ReactComponent as Notification } from 'assets/images/notification-3-line.svg'

interface PortfolioItemProps {
    stock: string;
    quantity: number;
    price: number;
    change: number;
    chart: JSX.Element;
}

const portfolioItems = [
    {
        stock: "A 그룹",
        quantity: 10,
        price: 100,
        change: 5,
        chart: <Chart1 />
    },
    {
        stock: "B 그룹",
        quantity: 10,
        price: 100,
        change: 5,
        chart: <Chart2 />
    },
    {
        stock: "C 그룹",
        quantity: 10,
        price: 100,
        change: 5,
        chart: <Chart3 />
    },
]

const PortfolioItem = ({ stock, quantity, price, change, chart }: PortfolioItemProps) => {
    return (
        <div className="bg-white p-2 flex gap-2 justify-between">
            <div className="rounded-full">
                <img className="rounded-full" src="https://via.placeholder.com/48" alt="stock" />
            </div>
            <div>
                {stock}
                <br />
                {quantity}주
            </div>
            <div>
                {chart}
            </div>
            <div className="flex flex-col">
                <span>${price}</span>
                <span>{change}%</span>
            </div>
        </div>
    )
}

const NewsItem = () => {
    return (
        <div className="bg-white p-2 flex gap-2 min-w-[194px] flex-col">
            <div className='flex'>
                <img className='rounded-xl' src="https://via.placeholder.com/194x114" alt="news" />
            </div>
            <div className='flex'>
                <span className="font-bold">A 기업 청기 들지말고 백...</span>
                {/* <span className="text-xs">뉴스 내용</span> */}
            </div>
        </div>
    )
}


export default function Page() {

    return (
        <div className="w-full bg-white p-6">
            <div className="flex flex-col gap-5">
                <div className="h-[42px] flex text-start justify-between">
                    <div className='flex flex-col'>
                        <span className='font-medium text-xs'>안녕하세요 전재민님</span>
                        <span className='font-bold text-base'>경상북도 NNN에 오신것을 환영합니다.</span>
                    </div>
                    <div>
                        <Notification />
                    </div>
                </div>
                <div className="bg-blue-50 flex flex-col items-center justify-center rounded-2xl h-[302px]">
                    <span className='w-full text-start px-6 pt-4 font-bold'>보유 현황</span>
                    <Map className='h-full' />

                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                        <span className="font-extrabold text-base">내가 투자한 회사</span>
                        <span className='text-[#F61C7A] font-semibold'>전체 보기</span>
                    </div>
                    {portfolioItems.map((item, index) => (
                        <PortfolioItem key={index} {...item} />
                    ))}
                </div>
                <div className="flex flex-col gap-4">
                    <div className='flex justify-between'>
                        <span className='font-bold'>주요 뉴스</span>
                    </div>

                    <div className="flex gap-4 overflow-x-auto" style={{
                        WebkitOverflowScrolling: 'touch',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}>
                        <NewsItem />
                        <NewsItem />
                        <NewsItem />
                        <NewsItem />
                    </div>
                </div>
            </div>
        </div>
    )
}