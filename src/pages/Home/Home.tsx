import { ReactComponent as Chart1 } from 'assets/images/Chart1.svg';
import { ReactComponent as Chart2 } from 'assets/images/Chart2.svg';
import { ReactComponent as Chart3 } from 'assets/images/Chart3.svg';
import { ReactComponent as Company1 } from 'assets/images/company1.svg';
import { ReactComponent as Company2 } from 'assets/images/company2.svg';
import { ReactComponent as Company3 } from 'assets/images/company3.svg';
import { ReactComponent as Map } from 'assets/images/map.svg';
import { ReactComponent as Notification } from 'assets/images/notification-3-line.svg'

interface PortfolioItemProps {
    stock: string;
    quantity: number;
    price: number;
    change: number;
    company: JSX.Element;
    chart: JSX.Element;
}

interface NewsItemProps {
    title: string;
    content: string;
    image: string;
}

const portfolioItems = [
    {
        stock: "메이드인피플",
        quantity: 80,
        price: 1000,
        change: -5,
        company: <Company1 className='w-12 h-12 rounded-full' />,
        chart: <Chart1 />
    },
    {
        stock: "솔티드",
        quantity: 10,
        price: 220,
        change: 3,
        company: <Company2 className='w-12 h-12 rounded-full' />,
        chart: <Chart2 />
    },
    {
        stock: "이엠 코어텍",
        quantity: 17,
        price: 500,
        change: 5,
        company: <Company3 className='w-12 h-12 rounded-full' />,
        chart: <Chart3 />
    },
]

const PortfolioItem = ({ stock, quantity, price, change, company, chart }: PortfolioItemProps) => {
    return (
        <div className="bg-white p-2 flex gap-2 justify-between">
            <div className="rounded-full w-12 h-12">
                {company}
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
                <span>￦{price}</span>
                <span>{change}%</span>
            </div>
        </div>
    )
}

const NewsItem = ({ title, content, image }: NewsItemProps) => {
    return (
        <div className="bg-white p-2 flex gap-2 min-w-[194px] flex-col">
            <div className="bg-gray-200 w-full h-[100px] rounded-lg">
                <img src={image} alt="news" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex flex-col gap-1">
                <span className="font-bold text-base">{title}</span>
                <span className="text-sm">{content}</span>
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
                        <span className='font-bold text-base'>경상북도 청기백기에 오신것을 환영합니다.</span>
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
                        <NewsItem
                            title="A 기업 주가 급등"
                            content="지역사회 투자 유치 성공으로..."
                            image="https://nimage.newsway.co.kr/photo/2024/07/28/20240728000001_0640.jpg"
                        />
                        <NewsItem
                            title="B 기업 주가 급등"
                            content="신제품 출시로 관련주들의 주가... "
                            image="https://play-lh.googleusercontent.com/oYzF_jfv7mI2ECUEXAZ0fBziPHldLGcI6yQ0I2Qr-mmuEol4oVQs36icv8TDfu2WMQLl"
                        />
                        <NewsItem
                            title="C 기업 사회적 기업 선정"
                            content="대표이사 김철수 대표이사..."
                            image="https://img.hankyung.com/data/service/edit_img/202411/c8df2b36205ea552631782268e9694fc.jpg"
                        />
                        <NewsItem
                            title="치킨 프랜차이즈 D 기업의 "
                            content="신메뉴 출시로 관련주들의 주가..."
                            image="https://cdn.imweb.me/thumbnail/20241028/e82583dc45ebf.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}