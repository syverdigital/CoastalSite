import footerLogo from '"src/assets/logo.svg"'
import theSpace from '"src/assets/logo.svg"'
import styles from './App.module.scss';


function App() {
    return (
        <div className={styles.App}>
            <header className={styles.nav}>
                <span className={styles.logo}>
                    <svg
                        width="1323"
                        height="104"
                        viewBox="0 0 1323 154"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M46.538 55.4241C46.538 55.6696 46.6361 55.7923 46.8325 55.7923C47.0288 55.7923 47.4215 55.645 48.0105 55.3505C55.3239 51.4239 63.3735 46.1965 72.1594 39.6684C72.6012 40.012 72.822 40.4292 72.822 40.9201C72.822 41.4109 72.5766 41.8772 72.0858 42.3189C71.595 42.7607 70.8833 43.3988 69.9507 44.2332C69.0672 45.0676 67.3493 46.5646 64.7969 48.7243C62.2446 50.884 59.8641 52.8473 57.6553 54.6143C51.8635 59.2772 47.5933 62.0258 44.8446 62.8603C43.9611 63.1057 43.004 63.2284 41.9732 63.2284C40.3044 63.2284 39.47 61.9277 39.47 59.3263C39.47 58.4428 40.0099 56.9948 41.0897 54.9824C42.1696 52.9209 42.7095 51.4239 42.7095 50.4913C42.7095 50.3931 42.6359 50.344 42.4886 50.344C42.3414 50.344 41.9732 50.5649 41.3842 51.0067C34.5617 56.3077 30.4141 59.9889 28.9416 62.0504C28.6471 62.4921 28.2545 62.713 27.7636 62.713C26.6838 62.713 25.9966 62.1976 25.7021 61.1669C25.7021 59.6944 27.7636 55.9641 31.8866 49.9759C36.0587 43.9878 40.9425 37.7051 46.538 31.128C52.1335 24.5017 56.6982 19.8388 60.2322 17.1392C61.2629 16.1576 63.668 15.6667 67.4474 15.6667C68.0364 15.814 68.3309 16.0594 68.3309 16.403C68.3309 16.7466 68.1591 17.0902 67.8156 17.4337C53.6796 31.0789 44.6974 40.5274 40.8689 45.7793C40.6725 45.9756 40.4026 46.3438 40.059 46.8837C39.7645 47.3745 39.6172 47.6935 39.6172 47.8408L39.6909 47.9144C39.8872 47.9144 41.4333 46.8346 44.3292 44.6749C47.2251 42.4662 49.3848 40.8955 50.8082 39.9629C51.25 39.5212 52.1825 39.3003 53.606 39.3003C54.833 39.4476 55.4466 39.8402 55.4466 40.4783C55.4466 40.6746 55.3975 40.8464 55.2993 40.9937C51.6672 46.1474 49.483 49.436 48.7467 50.8594C47.2742 53.1663 46.538 54.6879 46.538 55.4241Z"
                            fill="#414141"
                        />
                        <path
                            d="M81.5949 39.6684C80.3187 39.6684 78.1591 40.9937 75.1159 43.6442C72.0727 46.2456 70.5512 47.8408 70.5512 48.4298C70.5512 48.528 70.6248 48.577 70.772 48.577C71.8519 48.577 73.987 47.3745 77.1774 44.9694C80.4169 42.5644 82.0366 40.9201 82.0366 40.0366C82.0366 39.7911 81.8894 39.6684 81.5949 39.6684ZM65.9128 63.2284C62.1334 63.2284 60.2437 60.9215 60.2437 56.3076C60.2437 53.4117 61.4953 50.344 63.9986 47.1045C66.5509 43.816 69.545 41.1409 72.9808 39.0794C76.4166 36.9689 79.4598 35.9136 82.1103 35.9136C83.2883 35.9136 84.3681 36.3799 85.3498 37.3124C86.3805 38.245 86.8959 39.1531 86.8959 40.0366C86.8959 41.6563 85.7424 43.4969 83.4355 45.5584C81.1286 47.5708 78.699 49.2151 76.1467 50.4913C73.6434 51.7184 71.9746 52.3319 71.1402 52.3319C70.3548 52.3319 69.7658 51.9638 69.3732 51.2275C69.1768 51.0803 68.9069 51.0067 68.5633 51.0067C68.2197 51.0067 67.6553 51.6693 66.8699 52.9945C66.0846 54.2707 65.6919 55.326 65.6919 56.1604C65.6919 56.9457 65.9864 57.4366 66.5754 57.6329C70.3058 57.6329 74.3551 56.5531 78.7235 54.3934C83.0919 52.1847 89.1292 48.3316 96.8352 42.8343C97.3751 42.4416 98.185 41.8526 99.2649 41.0673C100.394 40.282 101.056 39.8157 101.253 39.6684C101.694 40.012 101.915 40.4292 101.915 40.9201C101.915 41.4109 101.694 41.8526 101.253 42.2453C98.7986 44.6995 95.6082 47.4481 91.6815 50.4913C87.8039 53.5345 83.3373 56.4304 78.2818 59.179C73.2262 61.8786 69.1032 63.2284 65.9128 63.2284Z"
                            fill="#414141"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M60.5258 52.2862C59.5385 53.0968 58.5814 53.8728 57.6546 54.6142C51.8628 59.2771 47.5926 62.0258 44.8439 62.8602C43.9604 63.1056 43.0033 63.2283 41.9726 63.2283C40.3037 63.2283 39.4693 61.9276 39.4693 59.3262C39.4693 58.4427 40.0092 56.9947 41.0891 54.9823C42.1689 52.9208 42.7088 51.4238 42.7088 50.4912C42.7088 50.3931 42.6352 50.344 42.4879 50.344C42.3407 50.344 41.9726 50.5648 41.3836 51.0066C34.561 56.3076 30.4135 59.9888 28.941 62.0503C28.6465 62.4921 28.2538 62.7129 27.763 62.7129C26.6831 62.7129 25.996 62.1976 25.7015 61.1668C25.7015 59.6943 27.763 55.964 31.886 49.9758C36.058 43.9877 40.9418 37.705 46.5373 31.1279C52.1328 24.5017 56.6975 19.8388 60.2315 17.1392C61.2623 16.1575 63.6673 15.6667 67.4467 15.6667C68.0357 15.8139 68.3302 16.0593 68.3302 16.4029C68.3302 16.7465 68.1585 17.0901 67.8149 17.4337C53.6789 31.0788 44.6967 40.5273 40.8682 45.7792C40.6719 45.9756 40.4019 46.3437 40.0583 46.8836C39.9464 47.0701 39.8558 47.2318 39.7864 47.3687C39.7477 47.445 39.7157 47.5136 39.6902 47.5745C39.6411 47.6919 39.6166 47.7806 39.6166 47.8407L39.6902 47.9144C39.7198 47.9144 39.7801 47.8898 39.871 47.8407C39.9409 47.803 40.029 47.7508 40.1352 47.684C40.807 47.2617 42.2048 46.2586 44.3286 44.6749C47.2245 42.4661 49.3841 40.8955 50.8075 39.9629C51.2493 39.5211 52.1819 39.3003 53.6053 39.3003C54.8324 39.4475 55.4459 39.8402 55.4459 40.4782C55.4459 40.6746 55.3968 40.8464 55.2986 40.9936C51.6665 46.1474 49.4823 49.4359 48.746 50.8593C47.2735 53.1663 46.5373 54.6878 46.5373 55.4241C46.5373 55.6695 46.6355 55.7922 46.8318 55.7922C47.0281 55.7922 47.4208 55.645 48.0098 55.3505C53.5579 52.3716 59.5298 48.6442 65.9253 44.1682C66.7504 43.5907 67.5825 43.0009 68.4216 42.3985C69.5882 41.3791 70.8206 40.4512 72.119 39.6149C72.1729 39.5801 72.2269 39.5456 72.281 39.5112C72.356 39.4635 72.4313 39.4161 72.5068 39.369C72.6636 39.2711 72.8214 39.1746 72.9801 39.0794C76.4159 36.9688 79.4591 35.9135 82.1096 35.9135C83.2876 35.9135 84.3674 36.3798 85.3491 37.3124C86.3798 38.245 86.8952 39.153 86.8952 40.0365C86.8952 41.6562 85.7417 43.4969 83.4348 45.5584C81.1279 47.5708 78.6983 49.2151 76.146 50.4912C73.6427 51.7183 71.9739 52.3318 71.1395 52.3318C70.3542 52.3318 69.7652 51.9637 69.3725 51.2275C69.1762 51.0802 68.9062 51.0066 68.5626 51.0066C68.219 51.0066 67.6546 51.6692 66.8693 52.9945C66.0839 54.2706 65.6913 55.3259 65.6913 56.1603C65.6913 56.9457 65.9858 57.4365 66.5748 57.6328C70.3051 57.6328 74.3544 56.553 78.7228 54.3933C83.0913 52.1846 89.1285 48.3316 96.8346 42.8342L99.2642 41.0672C100.393 40.2819 101.056 39.8156 101.252 39.6684C101.694 40.012 101.915 40.4292 101.915 40.92C101.915 41.4108 101.694 41.8526 101.252 42.2452C98.7979 44.6994 95.6075 47.4481 91.6808 50.4912C87.8032 53.5344 83.3367 56.4303 78.2811 59.179C73.2255 61.8785 69.1025 63.2283 65.9121 63.2283C62.1327 63.2283 60.243 60.9214 60.243 56.3076C60.243 55.0872 60.4653 53.8364 60.9098 52.555C61.0081 52.2716 61.1173 51.9867 61.2374 51.7003C60.9985 51.8976 60.7613 52.0929 60.5258 52.2862ZM60.2686 53.0805C59.4712 53.7322 58.6939 54.361 57.9367 54.9668C52.1502 59.6252 47.818 62.4292 44.9751 63.2922L44.9648 63.2953C44.0374 63.5529 43.0392 63.6798 41.9726 63.6798C40.999 63.6798 40.223 63.2882 39.7151 62.4966C39.2292 61.7392 39.0178 60.6607 39.0178 59.3262C39.0178 58.8047 39.1744 58.1623 39.4512 57.4199C39.7306 56.6706 40.1452 55.7867 40.6901 54.7711C41.2239 53.7518 41.6187 52.8825 41.8792 52.1603C42.0478 51.6927 42.1557 51.2987 42.2114 50.9733C42.0635 51.0692 41.8795 51.199 41.6575 51.3655C38.2516 54.0118 35.5186 56.2499 33.4557 58.0809C31.3885 59.9157 30.0181 61.3211 29.3123 62.3071C28.9424 62.8583 28.4163 63.1644 27.763 63.1644C27.1508 63.1644 26.6067 63.0175 26.1668 62.6876C25.7266 62.3574 25.4349 61.8771 25.2674 61.2909L25.25 61.2301V61.1668C25.25 60.7111 25.405 60.1372 25.6683 59.4728C25.9357 58.7979 26.332 57.988 26.8524 57.0463C27.8936 55.1624 29.4492 52.7189 31.5141 49.7198L31.5155 49.7178C35.6972 43.7158 40.5901 37.4217 46.1934 30.8354C51.7838 24.2152 56.3675 19.5269 59.9387 16.7947C60.5464 16.2265 61.498 15.8415 62.7181 15.5925C63.9617 15.3387 65.5411 15.2152 67.4467 15.2152H67.5023L67.5562 15.2287C67.8823 15.3102 68.1772 15.43 68.3984 15.6144C68.6351 15.8116 68.7817 16.0806 68.7817 16.4029C68.7817 16.9085 68.5269 17.3601 68.1341 17.7529L68.1285 17.7586C53.9875 31.4085 45.0345 40.8303 41.233 46.0452L41.2123 46.0736L41.1874 46.0985C41.0653 46.2206 40.8899 46.4458 40.6585 46.7901C40.6847 46.7719 40.7114 46.7533 40.7385 46.7343C41.5054 46.1988 42.6107 45.3927 44.0567 44.3144C46.9289 42.1238 49.0867 40.5532 50.5243 39.6088C50.8259 39.325 51.2463 39.1421 51.7342 39.0266C52.2468 38.9052 52.8737 38.8488 53.6053 38.8488H53.6323L53.6591 38.852C54.2993 38.9288 54.8383 39.0748 55.2291 39.3249C55.644 39.5904 55.8974 39.9813 55.8974 40.4782C55.8974 40.7536 55.8272 41.0146 55.6743 41.2441L55.6678 41.2538C52.0292 46.4167 49.8659 49.6769 49.147 51.0668L49.1376 51.085L49.1266 51.1023C48.3948 52.2487 47.8531 53.1891 47.4959 53.9274C47.1812 54.5778 47.0335 55.0248 46.9976 55.3002C47.0323 55.2891 47.0713 55.2754 47.115 55.2591C47.2896 55.1936 47.5175 55.0917 47.8022 54.9495C54.0386 51.6006 60.818 47.2997 68.1409 42.0443C69.577 40.791 71.1119 39.6739 72.7458 38.6935C76.2176 36.5611 79.3435 35.462 82.1096 35.462C83.419 35.462 84.605 35.9843 85.6561 36.9813C86.7255 37.95 87.3467 38.9692 87.3467 40.0365C87.3467 41.862 86.0597 43.8182 83.7357 45.895L83.7316 45.8986C81.398 47.9343 78.9368 49.6006 76.3479 50.895L76.3447 50.8966C75.086 51.5136 74.0275 51.9812 73.1727 52.2954C72.3319 52.6046 71.642 52.7833 71.1395 52.7833C70.6736 52.7833 70.2448 52.6732 69.8695 52.4386C69.5275 52.2249 69.2511 51.9211 69.0334 51.5465C68.9392 51.4982 68.7984 51.4611 68.5886 51.4582C68.5783 51.4634 68.5589 51.4742 68.5296 51.4955C68.4558 51.5494 68.3545 51.6446 68.2253 51.7963C67.9677 52.0987 67.6455 52.57 67.2576 53.2246L67.2538 53.2311C66.4822 54.485 66.1427 55.4526 66.1427 56.1603C66.1427 56.5004 66.207 56.7313 66.2993 56.8852C66.3768 57.0143 66.4882 57.1136 66.6543 57.1812C70.2752 57.166 74.2286 56.1114 78.521 53.9895C82.8576 51.7966 88.8714 47.9603 96.5708 42.4678C96.5714 42.4674 96.5719 42.4671 96.5724 42.4667L99.0063 40.6965C100.139 39.9085 100.793 39.4483 100.981 39.3072L101.257 39.1003L101.529 39.312C102.063 39.7275 102.366 40.2691 102.366 40.92C102.366 41.5617 102.073 42.116 101.562 42.5736C99.0918 45.0429 95.8891 47.8009 91.9587 50.8471C88.0585 53.9079 83.5705 56.817 78.4967 59.5756L78.4938 59.5772C73.4172 62.288 69.2146 63.6798 65.9121 63.6798C63.9264 63.6798 62.3638 63.0694 61.311 61.7842C60.2724 60.5163 59.7915 58.6646 59.7915 56.3076C59.7915 55.248 59.9517 54.1722 60.2686 53.0805ZM42.5428 50.7894C42.5427 50.7894 42.5421 50.7897 42.5408 50.79ZM75.4117 43.9846L75.4086 43.9873C73.8909 45.2847 72.7633 46.3222 72.0184 47.1032C71.645 47.4946 71.3775 47.8115 71.2062 48.0574C71.2051 48.059 71.204 48.0606 71.2029 48.0622C71.6224 47.9557 72.2023 47.709 72.961 47.2817C74.0037 46.6944 75.3171 45.8058 76.905 44.6089L76.9076 44.6069C78.5203 43.4096 79.7137 42.4133 80.4995 41.6155C80.8929 41.2162 81.173 40.8777 81.3521 40.5982C81.4921 40.3798 81.5533 40.2235 81.5748 40.12C81.0684 40.1268 80.3063 40.401 79.2535 41.0471C78.2036 41.6913 76.9241 42.6673 75.4117 43.9846ZM75.1152 43.6441C78.1584 40.9936 80.3181 39.6684 81.5942 39.6684C81.8887 39.6684 82.036 39.7911 82.036 40.0365C82.036 40.92 80.4162 42.5643 77.1767 44.9694C73.9863 47.3744 71.8512 48.577 70.7714 48.577C70.6241 48.577 70.5505 48.5279 70.5505 48.4297C70.5505 47.8407 72.0721 46.2455 75.1152 43.6441Z"
                            fill="#414141"
                        />
                        <path
                            d="M7.98652 15.9365C7.14378 15.9365 5.66897 15.1238 3.56211 13.4985C1.39505 11.8732 0.311523 10.5489 0.311523 9.52559C0.311523 8.50226 1.03388 7.71971 2.47858 7.17794C5.2476 5.97402 8.04672 5.04098 10.8759 4.37882L12.2303 4.10794C12.5313 3.98755 12.8022 3.92735 13.043 3.92735C13.4644 3.92735 13.6751 4.16814 13.6751 4.64971C13.6751 5.07108 13.9158 5.28177 14.3974 5.28177C14.879 5.28177 17.0761 4.8604 20.9889 4.01765C32.7271 1.60981 43.8333 0.405884 54.3074 0.405884C60.4474 0.405884 65.6544 1.15833 69.9283 2.66323C74.2624 4.10794 76.4295 6.18471 76.4295 8.89353C76.4295 9.49549 75.5867 9.79647 73.9012 9.79647C72.2759 9.79647 70.2895 9.82657 67.9418 9.88677C65.6544 9.94696 62.765 10.0373 59.2736 10.1576C51.0869 10.5188 46.9936 11.3315 46.9936 12.5956C46.9936 12.8364 47.0538 13.017 47.1742 13.1374C47.1742 13.4383 46.8431 13.95 46.1809 14.6724C45.5188 15.3345 44.4955 16.418 43.1109 17.9229C41.7264 19.4278 39.138 22.3173 35.3456 26.5912C31.5533 30.8049 28.0619 34.7778 24.8715 38.51C16.6247 48.2618 10.9361 55.7863 7.80594 61.0835C7.62535 63.1302 7.02339 64.1535 6.00005 64.1535C5.2175 64.1535 4.19417 63.5516 2.93005 62.3477C1.60574 61.1437 0.943582 59.6689 0.943582 57.9232C0.943582 54.6727 3.38152 50.0978 8.25741 44.1985C13.1333 38.2993 22.7647 28.8184 37.1515 15.7559C37.8137 15.0937 38.4156 14.552 38.9574 14.1306C39.8002 13.4684 40.2215 13.0772 40.2215 12.9568C40.2215 12.8364 40.0409 12.7762 39.6798 12.7762C39.3186 12.7762 38.5962 12.8364 37.5127 12.9568L9.8827 15.6656C9.46133 15.8462 8.82927 15.9365 7.98652 15.9365Z"
                            fill="#414141"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M341.322 126.546H327.835L326.318 129.977H339.871L341.322 126.546ZM388.587 129.977L387.129 126.546H400.673L402.191 129.977H388.587ZM337.486 135.62H323.823L322.305 139.053H336.034L337.486 135.62ZM392.445 139.053L390.986 135.62H404.686L406.204 139.053H392.445ZM333.648 144.697H319.809L316.398 152.411H330.387L333.648 144.697ZM299.012 139.053C299.126 138.942 299.239 138.83 299.352 138.717C300.328 137.72 301.258 136.688 302.141 135.62H282.702C282.463 135.771 282.221 135.92 281.976 136.066C280.011 137.266 277.944 138.261 275.775 139.053H299.012ZM248.191 139.053C246.012 138.261 243.923 137.266 241.924 136.066C241.68 135.92 241.438 135.771 241.198 135.62H221.753C222.641 136.688 223.573 137.72 224.549 138.717C224.662 138.83 224.775 138.942 224.889 139.053H248.191ZM231.726 144.697H292.174C289.256 146.711 286.102 148.448 282.713 149.908C276.43 152.558 269.509 153.884 261.95 153.884C254.49 153.884 247.569 152.558 241.188 149.908C237.799 148.448 234.645 146.711 231.726 144.697ZM193.543 139.053V135.62H182.658C180.296 136.986 177.758 138.13 175.042 139.053H193.543ZM147.457 139.053C145.439 138.294 143.474 137.347 141.563 136.214C141.237 136.02 140.914 135.822 140.595 135.62H120.855C121.815 136.793 122.828 137.924 123.893 139.011C123.908 139.025 123.922 139.039 123.936 139.053H147.457ZM130.632 144.697H190.94C187.349 147.459 183.504 149.589 179.407 151.086C174.302 152.951 167.97 153.884 160.411 153.884C153.245 153.884 146.521 152.607 140.238 150.055C136.81 148.586 133.608 146.8 130.632 144.697ZM116.843 129.977H133.598C132.539 128.9 131.535 127.757 130.586 126.546H114.909C115.515 127.721 116.16 128.864 116.843 129.977ZM193.155 126.546C192.194 127.744 191.156 128.888 190.039 129.977H193.543V126.546H193.155ZM213.167 120.902H227.544C224.467 114.995 222.929 108.319 222.929 100.874C222.929 93.1186 224.598 86.1978 227.936 80.1115C231.372 74.0252 236.034 69.2151 241.924 65.6811C247.814 62.1471 254.49 60.3801 261.95 60.3801C269.509 60.3801 276.185 62.1471 281.976 65.6811C287.866 69.2151 292.48 74.0252 295.818 80.1115C299.254 86.1978 300.972 93.1186 300.972 100.874C300.972 108.319 299.388 114.995 296.221 120.902H310.599C313.016 114.674 314.224 107.997 314.224 100.874C314.224 93.3149 312.899 86.3451 310.248 79.9643C307.696 73.4853 304.064 67.8898 299.352 63.1778C294.64 58.3677 289.093 54.6373 282.713 51.9868C276.43 49.2382 269.509 47.8639 261.95 47.8639C254.49 47.8639 247.569 49.2382 241.188 51.9868C234.807 54.6373 229.261 58.3677 224.549 63.1778C219.837 67.8898 216.156 73.4853 213.505 79.9643C210.953 86.3451 209.677 93.3149 209.677 100.874C209.677 107.997 210.84 114.674 213.167 120.902ZM330.331 120.902H398.178L364.254 44.1826L330.331 120.902ZM420.567 126.546H431.774C432.57 127.741 433.377 128.885 434.193 129.977H419.521C419.155 129.313 418.803 128.643 418.465 127.968L420.567 126.546ZM423.068 135.62C423.894 136.783 424.768 137.928 425.69 139.053H443.968C442.322 138.091 440.753 136.947 439.263 135.62H423.068ZM470.768 135.62C470.236 136.293 469.637 136.932 468.972 137.539C468.363 138.094 467.717 138.599 467.036 139.053H483.038C483.49 138.282 483.906 137.483 484.286 136.655C484.452 136.314 484.61 135.969 484.76 135.62H470.768ZM521.518 135.62V139.053H534.034V135.62H521.518ZM534.034 129.977H521.518V126.546H534.034V129.977ZM555.482 135.62L553.964 139.053H567.693L569.145 135.62H555.482ZM571.531 129.977H557.978L559.495 126.546H572.981L571.531 129.977ZM622.645 135.62L624.104 139.053H637.863L636.345 135.62H622.645ZM633.85 129.977H620.247L618.788 126.546H632.333L633.85 129.977ZM656.309 135.62V139.053H668.825V135.62H656.309ZM668.825 129.977H656.309V126.546H668.825V129.977ZM745.373 135.62V139.053H821.499C822.243 137.986 822.89 136.842 823.44 135.62H745.373ZM843.156 135.62V139.053H868.041V135.62H843.156ZM868.041 129.977H843.156V126.546H868.041V129.977ZM887.404 135.62L889.527 139.053H917.713L915.341 135.62H887.404ZM911.442 129.977H883.915L881.793 126.546H909.072L911.442 129.977ZM938.494 135.62V139.053H1006.97V135.62H938.494ZM962.349 129.977H938.494V126.546H962.349V129.977ZM1027.22 135.62V139.053H1095.69V135.62H1027.22ZM1051.07 129.977H1027.22V126.546H1051.07V129.977ZM1116.34 135.62L1114.3 139.053H1188.98V135.62H1116.34ZM1146.18 129.977H1119.69L1121.73 126.546H1148.23L1146.18 129.977ZM1207.25 135.62V139.053H1275.72V135.62H1207.25ZM1231.11 129.977H1207.25V126.546H1231.11V129.977ZM1231.11 120.902V108.236H1272.78V88.2103H1231.11V69.8041H1275.72V49.3364H1231.11H1223.75H1207.25V120.902H1231.11ZM1151.6 120.902L1194.28 49.3364H1113.44V71.5711H1154.37L1125.08 120.902H1151.6ZM1051.07 120.902V108.236H1092.74V88.2103H1051.07V69.8041H1095.69V49.3364H1051.07H1043.71H1027.22V120.902H1051.07ZM962.349 120.902V108.236H1004.02V88.2103H962.349V69.8041H1006.97V49.3364H962.349H954.986H938.494V120.902H962.349ZM905.173 120.902L900.08 113.53C901.016 113.171 901.92 112.781 902.792 112.359C908.682 109.512 913.149 105.586 916.192 100.579C919.235 95.4747 920.757 89.6338 920.757 83.0566C920.757 76.3813 919.235 70.5404 916.192 65.5339C913.149 60.4292 908.682 56.4535 902.792 53.6067C896.902 50.7598 889.54 49.3364 880.705 49.3364H868.041H858.764H843.156V120.902H868.041V116.63H875.662L878.304 120.902H905.173ZM825.676 120.902C825.352 116.77 824.206 113.186 822.237 110.151C819.98 106.42 816.936 103.377 813.108 101.021C810.563 99.3899 807.823 98.0622 804.888 97.0382C809.062 95.0851 812.44 92.5352 815.022 89.3883C818.262 85.5598 819.881 80.946 819.881 75.5469C819.881 69.6569 818.262 64.7976 815.022 60.9691C811.881 57.0425 807.561 54.1466 802.064 52.2814C796.665 50.3181 790.382 49.3364 783.216 49.3364H745.373V120.902H770.258V107.647H782.922C785.376 107.647 787.585 107.893 789.548 108.384C791.609 108.776 793.426 109.463 794.996 110.445C796.567 111.427 797.794 112.703 798.677 114.274C799.561 115.844 800.003 117.709 800.003 119.869C800.003 120.221 799.994 120.566 799.976 120.902H825.676ZM770.258 126.546H745.373V129.977H770.258V126.546ZM795.417 129.977C796.263 129.351 797.006 128.632 797.647 127.82C797.964 127.424 798.25 126.999 798.503 126.546H825.648C825.551 127.734 825.398 128.878 825.188 129.977H795.417ZM668.825 120.902V49.3363H656.309V120.902H668.825ZM629.837 120.902L595.914 44.1826L561.99 120.902H629.837ZM534.034 120.902V61.1163H560.539V49.3363H495.013V61.1163H521.518V120.902H534.034ZM486.768 120.902C486.447 117.678 485.669 114.83 484.433 112.359C482.764 108.923 480.605 106.027 477.954 103.671C475.402 101.217 472.604 99.2049 469.561 97.6342C466.518 96.0636 463.622 94.7874 460.873 93.8057C454.885 91.7443 450.124 89.6828 446.59 87.6213C443.154 85.4616 440.7 83.2038 439.227 80.8478C437.755 78.3936 437.019 75.7431 437.019 72.8963C437.019 69.5586 438.295 66.5646 440.847 63.9141C443.4 61.1654 447.473 59.7911 453.069 59.7911C457.094 59.7911 460.48 60.5764 463.229 62.1471C466.076 63.7177 468.481 65.7301 470.444 68.1843C472.408 70.6385 474.027 73.1417 475.304 75.694L486.053 69.5096C484.384 65.8774 482.077 62.4416 479.132 59.2021C476.187 55.8644 472.604 53.1648 468.383 51.1033C464.26 48.9437 459.401 47.8639 453.805 47.8639C448.013 47.8639 442.86 49.0418 438.344 51.3978C433.828 53.6557 430.294 56.797 427.742 60.8218C425.19 64.8466 423.914 69.4114 423.914 74.516C423.914 79.228 424.797 83.2038 426.564 86.4433C428.429 89.6828 430.785 92.4314 433.632 94.6892C436.479 96.8489 439.473 98.665 442.614 100.137C445.756 101.512 448.602 102.641 451.155 103.524C455.081 104.899 458.763 106.469 462.198 108.236C465.732 109.905 468.579 112.114 470.739 114.862C472.051 116.532 472.964 118.545 473.479 120.902H486.768ZM486.87 126.546H473.968C473.929 127.745 473.777 128.889 473.515 129.977H486.453C486.656 128.865 486.795 127.721 486.87 126.546ZM1275.72 144.697H1207.25V152.411H1223.75H1231.11H1275.72V144.697ZM1188.98 144.697H1110.95L1106.37 152.411H1188.98V144.697ZM1095.69 144.697H1027.22V152.411H1043.71H1051.07H1095.69V144.697ZM1006.97 144.697H938.494V152.411H954.986H962.349H1006.97V144.697ZM921.612 144.697H893.016L897.786 152.411H926.941L921.612 144.697ZM868.041 144.697H843.156V152.411H868.041V144.697ZM816.078 144.697H745.373V152.411H785.719C793.867 152.411 800.935 151.43 806.923 149.466C810.452 148.251 813.504 146.662 816.078 144.697ZM709.319 144.697H656.309V152.411H709.319V144.697ZM640.359 144.697H626.503L629.781 152.411H643.77L640.359 144.697ZM565.308 144.697H551.469L548.058 152.411H562.046L565.308 144.697ZM534.034 144.697H521.518V152.411H534.034V144.697ZM478.593 144.697H431.243C433.828 146.886 436.637 148.77 439.669 150.35C444.479 152.706 449.682 153.884 455.278 153.884C459.401 153.884 463.327 153.196 467.058 151.822C470.886 150.448 474.273 148.484 477.218 145.932C477.693 145.534 478.152 145.122 478.593 144.697ZM408.699 144.697L412.111 152.411H398.122L394.843 144.697H408.699ZM215.718 126.546C216.333 127.721 216.988 128.865 217.681 129.977H234.174C233.115 128.898 232.119 127.754 231.185 126.546H215.718ZM292.64 126.546C291.722 127.754 290.739 128.898 289.692 129.977H306.175C306.858 128.865 307.5 127.721 308.101 126.546H292.64ZM380.045 109.709H348.504L364.254 72.6018L380.045 109.709ZM126.852 120.902C123.702 115.057 122.126 108.381 122.126 100.874C122.126 92.8241 123.893 85.8052 127.427 79.817C131.06 73.7307 135.772 68.9696 141.563 65.5338C147.355 62.098 153.638 60.3801 160.411 60.3801C165.32 60.3801 169.786 61.0182 173.811 62.2943C177.934 63.5705 181.664 65.3866 185.002 67.7426C188.34 70.0004 191.187 72.6509 193.543 75.694V59.2021C189.223 55.3736 184.511 52.5268 179.407 50.6616C174.302 48.7964 167.97 47.8639 160.411 47.8639C153.245 47.8639 146.521 49.1891 140.238 51.8396C134.054 54.3919 128.605 58.0732 123.893 62.8833C119.181 67.5953 115.5 73.1908 112.85 79.6698C110.199 86.1488 108.874 93.2167 108.874 100.874C108.874 108.07 110.045 114.746 112.386 120.902H126.852ZM580.163 109.709H611.704L595.914 72.6018L580.163 109.709ZM780.566 90.2718H770.258V68.6261H780.566C784.885 68.6261 788.223 69.5096 790.579 71.2766C792.935 73.0436 794.113 75.6941 794.113 79.2281C794.113 81.5841 793.573 83.5965 792.493 85.2653C791.413 86.836 789.842 88.0631 787.781 88.9466C785.818 89.8301 783.413 90.2718 780.566 90.2718ZM878.938 70.3931H868.041V97.3398H878.938C882.275 97.3398 885.122 96.849 887.478 95.8673C889.932 94.7875 891.797 93.2659 893.074 91.3026C894.35 89.2411 894.988 86.7869 894.988 83.9401C894.988 81.0933 894.35 78.6882 893.074 76.7249C891.797 74.6634 889.932 73.0927 887.478 72.0129C885.122 70.933 882.275 70.3931 878.938 70.3931Z"
                            fill="#414141"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1304.78 37.2981C1310.25 37.2981 1314.68 32.8681 1314.68 27.4033C1314.68 21.9385 1310.25 17.5085 1304.78 17.5085C1299.32 17.5085 1294.89 21.9385 1294.89 27.4033C1294.89 32.8681 1299.32 37.2981 1304.78 37.2981ZM1304.78 44.6606C1314.32 44.6606 1322.04 36.9343 1322.04 27.4033C1322.04 17.8724 1314.32 10.146 1304.78 10.146C1295.25 10.146 1287.53 17.8724 1287.53 27.4033C1287.53 36.9343 1295.25 44.6606 1304.78 44.6606Z"
                            fill="#414141"
                        />
                    </svg>
                </span>
                <div className={styles['nav-btns']}>
                  {/*   <span className={styles['nav-span']}>
                        <a href="/" className={styles['nav-links']}>
                            Activities Nearby
                        </a>
                    </span>
                    <span className={styles['nav-span']}>
                        <a href="/" className={styles['nav-links']}>
                            About
                        </a>
                    </span> */}
                    <span className={(styles['nav-span'], styles.booknowBtn)}>
                        <a href="airbnb.com/h/sunsetgetaway2023" className={styles['nav-links']}>
                            Book
                        </a>
                    </span>
                </div>
            </header>
            <div className={styles['image-promo']}>
                <div className={styles.headertextDiv}>
                    <p className={styles.topTextHeader}>Discover Your</p>
                    <p className={styles.topSubTextHeader}>Oasis in Fort Myers Shores</p>
                </div>
            </div>
            <div className={styles.welcomeSection}>
                <h2 className={styles.WelcomeHeaderText}>Welcome</h2>
                <h2 className={styles.WelcomeheaderSubText}>where paradise meets comfort</h2>
                <p className={styles.welcomeTextBody}>
                    Nestled in the heart of this charming Florida destination, our apartment offers
                    a perfect blend of convenience and serenity. Immerse yourself in the vibrant
                    local culture, from pristine beaches and breathtaking sunsets to exciting
                    outdoor adventures and a thriving dining scene. Whether you're seeking a
                    peaceful retreat or an active lifestyle, Fort Myers Shores has it all. Step into
                    your new home and experience the ultimate coastal living. Welcome to your slice
                    of paradise!
                </p>
                <div className={styles.showcaseImage}>
                  <img src={theSpace} className={styles.showcaseImage}/>
                </div>
            <div className={styles.footer}>
              <div> 
                <img src={footerLogo} className={styles.footerLogo}/>
                    
                    <p className={styles.Copy}>© 2023 The Coastal Breeze</p>
                    </div>
            </div>
            </div>
        </div>
    );
}

export default App;