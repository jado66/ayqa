import Head from 'next/head'
import ProtectedContent from '@/components/util/ProtectedContent'
import PageLayout from '@/components/util/PageLayout'

import { useRouter } from 'next/router'
import { useState } from 'react'
import { ArrowBarUp, ArrowUp, Cloud, CloudArrowUpFill, CloudCheckFill, CloudFill, Images as ImagesIcon } from 'react-bootstrap-icons'

export default function Images() {
  
    const router = useRouter()

    const {query} = router

    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName);
    };

    let component = <UploadImages />;
    // } else if (activeButton === "Annotate Images") {
    //   component = <div>Annotate component</div>;
    // } else {
    //   component = <div>No component selected</div>;
    // }

    const buttons = ["Upload Images", "Annotate Images"];


    return (
    <>
      <Head>
        <title>{query.project} Images</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <ProtectedContent
          debug
          
        >
            {/* <Sidebar/> */}
            
            <h1 className='text-center mt-2'><ImagesIcon className="me-4"/> Images</h1>
            <hr className='mx-3'/>


            <div className='px-3'>
            
              {component}
            </div>
            
        </ProtectedContent>
      </main>
    </>
  )
}

const ButtonGroup = ({ buttons, onClick }) => {
  return (
    // use bootstrap class for button group container
    <div className="btn-group" role="group" aria-label="Basic example">
      {buttons.map((buttonLabel, i) => (
        // use bootstrap class for button style
        <button key={i} name={buttonLabel} onClick={() => onClick(buttonLabel)} className="btn btn-secondary">
          {buttonLabel}
        </button>
      ))}
    </div>
  );
};

const UploadImages = () => {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-12">
          <form>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Search..." aria-label="Search..." aria-describedby="basic-addon2"/>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary  rounded-0 rounded-end" type="button">Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
     
        <div className="row px-3 mb-2">
          <div className="col-2 gx-2">
            <button className="d-flex justify-content-center position-relative rounded-2 h-100 w-100 btn btn-light border-dark ">
                <div className='d-flex  flex-column my-auto'>
                  <ArrowBarUp className='my-3 w-100 fs-1'/>
                  <span className='flex-grow-1 text-center fs-4'>Upload Files</span>
                </div>
              </button>
              
          </div>
          <div className="col-2 gx-2">
            <AnnotateImages src="image2.jpg" className="img-fluid" alt="Image 2" annotation = "Ok"/>
          </div>
          <div className="col-2 gx-2">
            <AnnotateImages src="image3.jpg" className="img-fluid" alt="Image 3" annotation = "Bad"/>
          </div>
          <div className="col-2 gx-2">
            <AnnotateImages src="image4.jpg" className="img-fluid" alt="Image 4" annotation = "Ok"/>
          </div>
          <div className="col-2 gx-2">
            <AnnotateImages src="image3.jpg" className="img-fluid" alt="Image 3" annotation = "Bad"/>
          </div>
          <div className="col-2 gx-2">
            <AnnotateImages src="image4.jpg" className="img-fluid" alt="Image 4" annotation = "Ok"/>
          </div>
          
        </div>
        <div className="row px-3 mb-2">
        <div className="col-2 gx-2">
            <AnnotateImages src="image1.jpg" className="img-fluid" alt="Image 1" annotation = "Ok"/>
          </div>
          <div className="col-2 gx-2">
            <AnnotateImages src="image2.jpg" className="img-fluid" alt="Image 2" annotation = "Ok"/>
          </div>
          <div className="col-2 gx-2">
            <AnnotateImages src="image3.jpg" className="img-fluid" alt="Image 3" annotation = "Bad"/>
          </div>
          <div className="col-2 gx-2">
            <AnnotateImages src="image4.jpg" className="img-fluid" alt="Image 4" annotation = "Ok"/>
          </div>
          <div className="col-2 gx-2">
            <AnnotateImages src="image3.jpg" className="img-fluid" alt="Image 3" annotation = "Bad"/>
          </div>
          <div className="col-2 gx-2">
            <AnnotateImages src="image4.jpg" className="img-fluid" alt="Image 4" annotation = "Ok"/>
          </div>
        </div>
        <div className="row px-3 mb-4">
          <div className="col-2 gx-2">
            <AnnotateImages src="image1.jpg" className="img-fluid" alt="Image 1" annotation = "Ok"/>
          </div>
          <div className="col-2 gx-2">
            <AnnotateImages src="image2.jpg" className="img-fluid" alt="Image 2" annotation = "Ok"/>
          </div>
          <div className="col-2 gx-2">
            <AnnotateImages src="image3.jpg" className="img-fluid" alt="Image 3" annotation = "Bad"/>
          </div>
          <div className="col-2 gx-2">
            <AnnotateImages src="image4.jpg" className="img-fluid" alt="Image 4" annotation = "Ok"/>
          </div>
          <div className="col-2 gx-2">
            <AnnotateImages src="image3.jpg" className="img-fluid" alt="Image 3" annotation = "Bad"/>
          </div>
          <div className="col-2 gx-2">
            <AnnotateImages src="image4.jpg" className="img-fluid" alt="Image 4" annotation = "Ok"/>
          </div>
        </div>
     
    </div>
  );
}


const AnnotateImages = (props) => {

  const [annotation, setAnnotation] = useState(props.annotation)
  const [hasBeenUploaded, setHasBeenUploaded] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  return (
    <div className="d-flex justify-content-center border position-relative rounded-2">
      <div className="position-absolute top-0 end-0 pt-0 d-flex pe-1 pt-1 " style={{zIndex:2000}}>
         
        <button className={"badge btn btn-sm border-dark "+(annotation === 'Ok'?"btn-success":"btn-danger")}
          onClick={() => setAnnotation(annotation === 'Ok'?"Bad":"Ok")}
        >{annotation}</button>
      </div>


      

      
      <img src="https://picsum.photos/100" className="img-fluid rounded-2 flex-grow-1 border border-dark " alt="Placeholder Image" />
    </div>
  )
}