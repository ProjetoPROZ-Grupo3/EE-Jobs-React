import BannerBox from "../../styles/BannerBox.styled";

function BannerContent ({children1, children2}) {
    return (
        <BannerBox>
            {children1}

        </BannerBox>
    )
}

export default BannerContent;