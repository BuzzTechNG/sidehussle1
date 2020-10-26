
import React from 'react'

function NoFile({text}) {
    return (
        <div className="d-flex align-items-center mb-4 container-m mx-4" style={{flexDirection:"column"}} >
                <svg width="180" height="91" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.11" d="M624.604 590.001H155.669C127.358 590.001 104.492 567.135 104.492 538.824V69.8892C104.492 41.9419 127.358 18.7129 155.669 18.7129H624.604C652.914 18.7129 675.78 41.5789 675.78 69.8892V538.824C675.78 567.135 652.551 590.001 624.604 590.001Z" fill="#020202" stroke="#221b38" stroke-width="1"></path>
<path d="M614.811 581.288H145.876C117.565 581.288 94.6992 558.422 94.6992 530.111V61.1763C94.6992 32.866 117.565 10 145.876 10H614.811C643.121 10 665.987 32.866 665.987 61.1763V530.111C665.987 558.422 643.121 581.288 614.811 581.288Z" fill="#C4B6FF" stroke="#221b38" stroke-width="1"></path>
<path opacity="0.11" d="M689.941 278.586H627.876C611.906 166.434 515.361 80.4141 398.853 80.4141C271.094 80.4141 167.289 183.856 167.289 311.615C167.289 439.374 270.731 542.816 398.49 542.816C519.353 542.816 618.439 450.263 628.965 332.303H689.941C704.822 332.303 716.8 320.326 716.8 305.445C716.8 290.927 704.459 278.586 689.941 278.586Z" fill="#020202" stroke="#221b38" stroke-width="1"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M598.768 311.451C591.356 432.453 490.873 528.296 368.006 528.296C240.317 528.296 136.805 424.784 136.805 297.095C136.805 169.407 240.317 65.8945 368.006 65.8945C482.46 65.8945 577.49 149.062 595.959 258.26H699.386C707.734 258.26 714.63 265.156 714.63 273.504V296.733C714.993 304.718 708.096 311.614 699.749 311.614H599.066C598.966 311.56 598.867 311.506 598.768 311.451Z" fill="#7D55FF" stroke="#221b38" stroke-width="1"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M599.062 311.616H699.745C708.093 311.616 714.989 304.72 714.626 296.735V273.506C714.626 265.158 707.73 258.262 699.382 258.262H595.929C598.018 272.709 601.569 303.606 599.062 311.616Z" fill="black" fill-opacity="0.11" stroke="#221b38" stroke-width="1"></path>
<path d="M543.355 387.752C594.183 286.097 552.979 162.486 451.324 111.658C349.669 60.831 226.058 102.035 175.23 203.69C124.403 305.344 165.607 428.956 267.262 479.783C368.916 530.611 492.528 489.407 543.355 387.752Z" fill="#B5CDFB" stroke="#221b38" stroke-width="1"></path>
<path opacity="0.05" d="M423.171 458.612C415.912 458.612 409.016 454.619 405.75 447.36C401.394 437.561 405.75 426.309 415.186 421.954C431.882 414.332 447.126 404.169 459.83 392.191C470.718 381.666 504.473 349.726 504.11 299.639C504.11 258.625 481.244 228.863 471.081 218.337C463.822 210.352 464.548 198.375 472.17 191.479C479.792 184.22 492.132 184.945 499.029 192.567C511.732 206.723 541.857 245.196 541.857 299.639C541.857 343.919 522.983 384.207 485.599 420.139C469.992 435.02 451.119 447.723 430.43 457.16C428.253 457.886 425.712 458.612 423.171 458.612Z" fill="white" stroke="#221b38" stroke-width="1"></path>
<path opacity="0.05" d="M346.954 475.305C337.881 475.305 328.807 474.579 320.096 473.49C309.57 472.039 302.311 462.239 304.126 451.713C305.941 441.188 315.378 433.929 325.903 435.743C354.576 440.099 386.516 435.38 415.19 422.314C424.989 417.959 436.241 422.314 440.596 431.751C444.952 441.188 440.596 452.802 431.159 457.158C403.938 469.135 374.902 475.305 346.954 475.305Z" fill="white" stroke="#221b38" stroke-width="1"></path>
<path opacity="0.3" d="M346.954 475.305C337.881 475.305 328.807 474.579 320.096 473.49C309.57 472.039 302.311 462.239 304.126 451.713C305.941 441.188 315.378 433.929 325.903 435.743C354.576 440.099 386.516 435.38 415.19 422.314C424.989 417.959 436.241 422.314 440.596 431.751C444.952 441.188 440.596 452.802 431.159 457.158C403.938 469.135 374.902 475.305 346.954 475.305Z" fill="white" stroke="#221b38" stroke-width="1"></path>
<path opacity="0.05" d="M322.643 473.489C321.554 473.489 320.828 473.489 319.739 473.126C300.865 470.223 282.718 464.415 266.022 455.341C214.483 428.12 191.98 380.936 184.721 362.063C168.388 319.234 169.114 273.502 186.898 225.955C195.972 202 209.401 180.223 226.823 160.987C234.082 153.002 246.06 152.639 253.682 159.898C261.667 167.157 262.03 179.134 254.77 186.756C240.615 202.363 229.727 220.148 222.105 239.385C207.587 277.858 206.861 314.153 219.927 347.907C225.734 362.789 243.519 400.173 283.807 421.587C296.51 428.483 310.665 432.838 325.183 435.379C335.709 436.831 342.968 446.631 341.153 457.156C340.427 466.593 332.079 473.489 322.643 473.489Z" fill="white" stroke="#221b38" stroke-width="1"></path>
<path opacity="0.12" d="M348.753 369.324C325.161 369.324 301.932 362.065 283.784 348.273C242.044 316.696 236.963 259.35 253.659 218.699C277.251 160.627 337.864 147.923 344.76 146.834C351.656 145.745 358.189 150.101 359.641 156.997C360.73 163.893 356.375 170.426 349.478 171.878C347.301 172.241 296.124 182.041 277.614 228.136C265.273 258.987 268.54 304.356 299.754 327.948C316.813 340.651 340.042 346.095 362.545 342.829C382.507 339.562 398.84 330.125 408.64 315.607C420.98 297.823 423.884 270.964 415.899 247.009C410.817 232.128 402.833 221.603 393.759 218.699C385.774 216.158 374.159 218.336 363.271 224.506C350.93 231.765 342.219 242.654 340.042 253.542C337.864 264.431 340.405 281.853 350.567 286.208C360.004 290.564 372.344 282.579 373.07 282.216C378.878 278.586 386.863 280.038 390.855 286.208C394.485 292.015 393.033 300 386.863 303.993C382.87 306.534 361.456 318.874 340.405 309.8C315.361 298.549 311.368 267.335 314.998 248.824C318.627 230.313 331.694 213.618 350.567 202.729C367.626 192.566 386.863 189.663 401.744 194.744C418.439 200.188 432.595 216.521 440.217 239.024C448.565 263.705 450.016 300.726 429.691 330.125C415.899 350.088 393.396 363.517 366.537 367.873C360.367 368.598 354.56 369.324 348.753 369.324Z" fill="white" stroke="#221b38" stroke-width="1"></path>
</svg>            
            
             <div className="subtitle1 mt-4">{text}</div>
            
        </div>
    )
}

export default NoFile