import React, { useEffect } from 'react'
import './OurService.css'
import { Container, Row } from 'react-bootstrap'
import Cards from '../../Cards'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from "react-i18next";

function OurService() {
    const { t } = useTranslation()

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, [])

    return (
        <>
            <Container className="section-service">
                <div data-aos="fade-up">
                    <Row className="border-title-service" />
                    <Row className="row-title-services">
                        <h1>{t('our_service_title')}</h1>
                    </Row>
                    <Row className='container-cards'>
                        <Cards />
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default OurService
