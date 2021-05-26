import React from 'react';

function Newsletter() {
    return (
            <div id="reader's club" class="container" style={{ margin: '24px', width: '70%', marginLeft: '15%', marginRight: '15%', alignSelf: 'center'}}>
            <div class="ml-form-embed"
            data-account="2495824:w5x8z5w2r4"
            data-form="3947551:v5n4b0">
            </div>
            <br />
            <br />
            <center><p onClick={scrollToTop} style={{ cursor: 'pointer', }}>
                Return to top.
            </p></center>
        </div>
    )
}

const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
  }

export default Newsletter;
