'use client'

const HydrationTest = () => {
    let a = Math.random();
    console.log(a);

    return (
        <div>
            HydrationTest
            <p>{a}</p>
        </div>
    )
}

export default HydrationTest;