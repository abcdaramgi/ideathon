import { ReactComponent as Notification } from 'assets/images/notification-3-line.svg'
import { ReactComponent as ProfileIcon } from 'assets/images/profile-icon.svg'
import { ReactComponent as Chart1 } from 'assets/images/Chart1.svg';
import { ReactComponent as Chart2 } from 'assets/images/Chart2.svg';
import { ReactComponent as Chart3 } from 'assets/images/Chart3.svg';
import { ReactComponent as Company1 } from 'assets/images/company1.svg';
import { ReactComponent as Company2 } from 'assets/images/company2.svg';
import { ReactComponent as Company3 } from 'assets/images/company3.svg';

interface PortfolioItemProps {
    stock: string;
    quantity: number;
    price: number;
    change: number;
    company: JSX.Element;
    chart: JSX.Element;
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

export default function Page() {
    return (
        <div className="w-full bg-white p-6">
            <div className="flex flex-col gap-5">
                <div className="h-[42px] flex text-start justify-between">
                    <div>
                        <ProfileIcon />
                    </div>
                    <div>
                        <Notification></Notification>
                    </div>
                </div>
                <div className='bg-blue-50 rounded-2xl h-[300px] flex flex-col items-center justify-between'>
                    <span className='text-start w-full px-6 pt-4 font-bold'>총 보유 수량 (주)</span>
                    <span className='text-start w-full px-6 font-bold text-2xl'>15,000</span>
                    <span className='text-start w-full px-6 text-sm'>≒￦30,000,000</span>
                    <svg height={'100%'}>
                        {[100, 120, 135, 170, 160].map((value, index) => (
                            <rect
                                key={index}
                                x={index * 67}
                                y={22}
                                width="32"
                                height={value}
                                fill="skyblue"
                                rx="4"
                                ry="4"
                                transform="translate(0, 300) scale(1, -1)"
                            />

                        ))}
                    </svg>
                    <div className='flex w-[300px] justify-between'>
                        {[2024, 2025, 2026, 2027, 2028].map((value, index) => (
                            <text
                                key={index}
                                x={index * 67}
                                y={22}
                                fill="black"
                                fontSize="12"
                                transform="translate(0, 300) scale(1, -1)"
                            >
                                {value}
                            </text>
                        ))}
                    </div>

                </div>


                <div className="flex flex-col gap-4">
                    {['A 그룹', 'B 그룹', 'C 그룹', 'D 그룹', 'E 그룹'].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <span className="w-1/4">{item}</span>
                            <div className="w-3/4 bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-600 h-2 rounded-full"
                                    style={{ width: `${(index + 1) * 20}%`, backgroundColor: ['#FFB3BA', '#FFDFBA', '#FFFFBA', '#BAFFC9', '#BAE1FF'][index] }}></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                        <span className="font-extrabold text-base">내가 투자한 회사</span>
                    </div>
                    {portfolioItems.map((item, index) => (
                        <PortfolioItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>

    );
}