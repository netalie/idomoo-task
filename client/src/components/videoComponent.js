import { useEffect, useState } from "react";
import axios from "axios";

const VideoComponent = (props) => {
    const [isVideoReady, setIsVideoReady] = useState(false);

    useEffect(() => {
        if (isVideoReady && props.videoUrl !== '') {
            const options = {
                size: 'hd',
                src: props.videoUrl,
                autoplay: true
            }

            window.idmPlayerCreate(options, 'video-player')
        }

    }, [isVideoReady])

    useEffect(() => {
        let interval;
        if (props.checkStatusUrl) {
            const fetchData = async () => {
                try {
                    const response = await axios.get(props.checkStatusUrl);
                    console.log(response.data);
                    setIsVideoReady(response.data.status === 'VIDEO_AVAILABLE')
                } catch (error) {
                    console.error(error);
                }
            };

            interval = setInterval(() => {
                fetchData();
            }, 30000); // Make the API request every 30 seconds

            fetchData(); // Make the API request initially
        }

        return () => {
            clearInterval(interval);
        };
    }, [props.checkStatusUrl]);

    return (
        <div id="video-player"> </div>
    );
};

export default VideoComponent;