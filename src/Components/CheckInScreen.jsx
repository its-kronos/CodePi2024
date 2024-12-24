import { useState, useEffect , useRef} from "react";

function CheckInScreen_func(objs){
    const Ref = useRef();
    const [Intersecting,setIntersecting] = useState(false);

    useEffect(
        function(){
            const observer = new IntersectionObserver(function(children){
                children.forEach(function(child){
                    setIntersecting(child.isIntersecting);
                });
                }
            );

            observer.observe(Ref.current);
            return function(){
                observer.unobserve(Ref.current)
            };
            },[]);
    return (
        <div className={`fadein ${Intersecting?'FadeIn':''}`} ref={Ref}>
            {objs.children}
        </div>
    )
}


export default CheckInScreen_func