import { useNavigate } from 'react-router-dom';

interface HomeContentButtonProps {
    navigate: string;
    img?: string;
    title: string;
    description?: string;
    color: string;
}

const HomeContentButton = (props: HomeContentButtonProps) => {
    const navigatie = useNavigate();

    return (
        <button
            className={`bg-${props.color} rounded-md`}
            onClick={() => { navigatie(props.navigate) }}>
            <div className="flex flex-col p-4">
                <div className="flex">
                    <span className="text-3xl font-medium">
                        {props.title}
                    </span>
                </div>
                {
                    props.description && (
                        <div className="flex">
                            <span className="font-thin">
                                {props.description}
                            </span>
                        </div>
                    )
                }
                {
                    props.img && (
                        <div className="flex justify-end">
                            <img src={props.img} alt="" />
                        </div>
                    )
                }
                <div className="flex justify-end">
                    <span>신청하기</span>
                </div>
            </div>
        </button>
    )
}

export default HomeContentButton;