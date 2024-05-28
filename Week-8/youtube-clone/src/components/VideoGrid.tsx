import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title: "Breakfast With Champions with (Adam Gilchrist)",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Gaurav Kapoor",
    views: "20K",
    timestamp: "24 hours ago",
}, {
    title: "Breakfast With Champions with (Virat Kohli)",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Gaurav Kapoor",
    views: "20K",
    timestamp: "24 hours ago",
}, {
    title: "Breakfast With Champions with (Rohit Sharma)",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Gaurav Kapoor",
    views: "20K",
    timestamp: "24 hours ago",
}, {
    title: "Breakfast With Champions with (Ricky Pointing)",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Gaurav Kapoor",
    views: "20K",
    timestamp: "24 hours ago",
}, {
    title: "Breakfast With Champions with (Sourav Ganguly)",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Gaurav Kapoor",
    views: "20K",
    timestamp: "24 hours ago",
},{
    title: "Breakfast With Champions with (Sourav Ganguly)",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Gaurav Kapoor",
    views: "20K",
    timestamp: "24 hours ago",
},{
    title: "Breakfast With Champions with (Sourav Ganguly)",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Gaurav Kapoor",
    views: "20K",
    timestamp: "24 hours ago",
},{
    title: "Breakfast With Champions with (Sourav Ganguly)",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Gaurav Kapoor",
    views: "20K",
    timestamp: "24 hours ago",
},{
    title: "Breakfast With Champions with (Sourav Ganguly)",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Gaurav Kapoor",
    views: "20K",
    timestamp: "24 hours ago",
},{
    title: "Breakfast With Champions with (Sourav Ganguly)",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Gaurav Kapoor",
    views: "20K",
    timestamp: "24 hours ago",
},{
    title: "Breakfast With Champions with (Sourav Ganguly)",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Gaurav Kapoor",
    views: "20K",
    timestamp: "24 hours ago",
},{
    title: "Breakfast With Champions with (Sourav Ganguly)",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Gaurav Kapoor",
    views: "20K",
    timestamp: "24 hours ago",
}]

export const VideoGrid = () => {
    return <div className="grid grid-cols-5 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCard
                title={video.title}
                image={video.image}
                thumbImage={video.thumbImage}
                author={video.author}
                views={video.views}
                timestamp={video.timestamp}>
            </VideoCard>
        </div>
        )}
    </div>
}