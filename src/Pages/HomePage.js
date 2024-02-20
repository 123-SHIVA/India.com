import Card from "../Components/Card";
import Carosal from "../Components/Carosal";
import HomeLayout from "../Layouts/HomeLayout";

function HomePage() {
    return (
        <HomeLayout>

            {/* ---------------------------- Carosal--------------------- */}

            <Carosal />


            {/* ----------------------------Lates Update --------------------- */}

            <section className="px-20 py-8 my-20 w-full bg-gradient-to-r from-green-500 to-yellow-500">
                <h1 className="my-5  text-3xl text-white font-bold">Latest Update</h1>

                <div className=" flex gap-7 carousel rounded-box my-10">
                    <div className="carousel-item">
                        <Card/>
                    </div>
                    <div className="carousel-item">
                        <Card/>
                    </div>
                    <div className="carousel-item">
                        
                        <Card/>
                    </div>
                    <div className="carousel-item">
                        <Card/>
                    </div>
                    <div className="carousel-item">
                        <Card/>
                    </div>
                    <div className="carousel-item">
                        <Card/>
                    </div>
                   
                </div>

            </section>
        </HomeLayout>

    )
}


export default HomePage;