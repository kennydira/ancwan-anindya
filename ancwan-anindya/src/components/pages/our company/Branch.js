import React from 'react'
import { Row, Col } from 'react-bootstrap'
import data from '../../../data'
import './Branch.css'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiaGFkbGluYSIsImEiOiJja3I4cTVzbmcyNHBsMm5uM3NycXVhbm5yIn0.YflnOZPZMDIMtS9XeAjhZQ';

class Branch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: 117.617216,
            lat: -1.307473,
            zoom: 4
        }
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/hadlina/ckr8q6xvv4l0h17qf38zw0gbz',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        })

        // coordinate.forEach((geojson) => {
        //     var el = document.createElement('div');
        //     el.className = 'marker';

        //     new mapboxgl.Marker(el)
        //             .setLngLat(geojson.geometry.coordinates)
        //             .setPopup(new mapboxgl.Popup({offset: 30})
        //             .setHTML('<h4>' + geojson. + '</h4>'))
        //             .addTo(map);
        // })

        map.on('load', function () {
            map.resize();

            map.addSource('places', {
                'type': 'geojson',
                'data': {
                    "type": "FeatureCollection",
                    "features": [
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates":  [ 103.607254,-1.609972 ]
                            },
                            "properties": {
                                "type":"Feature",
                                "description":"<div style='text-align:left;'><h5>Jambi</h5><b>Office & Laboratory</b><br/>JI. Abdul Rahman Saleh No. 8<br/>Kel. The Hok, Kec. Jambi Selatan<br/>Jambi 36138<br/>(+62 741) 572805</div>",
                                "geometry_type":"Point"
                            }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates":  [ 104.756554,-2.990934 ]
                            },
                            "properties": {
                                "type":"Feature",
                                "description":"<div style='text-align:left;'><h5>Palembang</h5><b>Office & Laboratory</b><br/>Komp. Pergudangan Sukarame Blok D No. 9<br/>JI. Tembus Terminal<br/>Kel Talang Kelapa, Kec. Alang-Alang Lebar<br/>Palembang, Sumatera Selatan 30151</div>",
                                "geometry_type":"Point"
                            }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates":  [ 106.816666,-6.200000 ]
                            },
                            "properties": {
                            "type":"Feature",
                            "description":"<div style='text-align:left;'><h5>Jakarta</h5><b>Headquarter</b><br/>Springhill Office Tower 17 th & 18th Floor<br/>Jl. H. Benyamin Suaeb Ruas D7 Block D6<br/>Pademangan Timur, Jakarta Utara 14410<br/>(+62 21) 2260 6207</div>",
                            "geometry_type":"Point"
                            }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates":  [ 107.15278,-6.26111 ]
                            },
                            "properties": {
                            "type":"Feature",
                            "description":"<div style='text-align:left;'><h5>Cikarang</h5><b>Office & Laboratory</b><br/>Kawasan Industri Delta Silikon 3 Lippo Cikarang<br/>Jl. Rotan Blok F 27 No. 23 C<br/>Kel. Cicau, Kec. Cikarang Pusat<br/>Kab. Bekasi, Jawa Barat 17531<div>",
                            "geometry_type":"Point"
                            }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates":  [ 107.613144,-6.905977 ]
                            },
                            "properties": {
                            "type":"Feature",
                            "description":"<div style='text-align:left;'><h5>Bandung</h5><b>Head Office</b><br/>JI. Buah Batu No. 43 Lt. 2<br/>Kel. Malabar, Kec. Lengkong<br/>Bandung, Jawa Barat 40262<br/>(+62 22) 87346430</div>",
                            "geometry_type":"Point"
                            }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates":  [ 109.333336,0.000000 ]
                            },
                            "properties": {
                            "type":"Feature",
                            "description":"<div style='text-align:left;'><h5>Pontianak</h5><b>Office & Laboratory</b><br/>Office & Laboratory<br/>JI. Arteri Supadio Gg. Anyar RT 07 RW 10<br/>Desa Arang Limbung, Kec. Sungai Raya<br/>Pontianak, Kalimantan Barat 78391</div>",
                            "geometry_type":"Point"
                            }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates":  [ 114.810318,-3.457242 ]
                            },
                            "properties": {
                            "type":"Feature",
                            "description":"<div style='text-align:left;'><h5>Banjarbaru</h5><b>Office</b><br/>Jl. Ahmad Yani KM 22.7 RT 02/RW 01<br/>Kel. Landasan Ulin Tengah, Kec. Liang Anggang<br/>Banjarbaru, Kalimantan Selatan 70722<br/><br/><b>Laboratory</b><br/>Jl. Ahmad Yani KM 21 RT 02/RW 02<br/>Kel. Landasan Ulin Tengah, Kec. Liang Anggang<br/>Banjarbaru, Kalimantan Selatan 70722<br/>(+62 511)4706093</div>",
                            "geometry_type":"Point"
                            }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates":  [ 116.000519,-3.025327 ]
                            },
                            "properties": {
                            "type":"Feature",
                            "description":"<div style='text-align:left;'><h5>Batulicin</h5><b>Office & Laboratory</b><br/>JI. Transmigrasi KM 3,5<br/>Kel. Barokah, Kec. Simpang Empat Batulicin<br/>Kab. Tanah Bumbu, Kalimantan Selatan 72213<br/>(+62 518) 75638</div>",
                            "geometry_type":"Point"
                            }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates":  [ 122.514900,-3.972201 ]
                            },
                            "properties": {
                            "type":"Feature",
                            "description":"<div style='text-align:left;'><h5>Kendari</h5><b>Office & Laboratory</b><br/>JI. Poros Bandara Haluoleo<br/>Desa Onewila, Kec. Ranomeeto<br/>Kab. Konawe Selatan, Sulawesi Tenggara 93372</div>",
                            "geometry_type":"Point"
                            }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates":  [ 115.153343,-2.111096 ]
                            },
                            "properties": {
                            "type":"Feature",
                            "description":"<div style='text-align:left;'><h5>Tamiang Layang</h5><b>Office</b><br/>JI. Tumpa Dayu RT 11<br/>Desa Tamiang Layang, Kec. Dusun Timur<br/>Kab. Barito Timur, Kalimantan Tengah 73617<br/>(+62 526) 2091361</div>",
                            "geometry_type":"Point"
                            }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates":  [ 117.092110,-0.514462 ]
                            },
                            "properties": {
                            "type":"Feature",
                            "description":"<div style='text-align:left;'><h5>Samarinda</h5><b>Office & Laboratory</b><br/>JI. KH. Harun Nafsi No. 56<br/>Kel. Rapak Dalam, Kec. Loa Janan llir<br/>Samarinda, Kalimantan Timur 75131<br/>Phone: (+62 541) 7269686<br/>Fax: (+62 541) 7269705</div>",
                            "geometry_type":"Point"
                            }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates":  [ 116.702492,1.846291 ]
                            },
                            "properties": {
                            "type":"Feature",
                            "description":"<div style='text-align:left;'><h5>Berau</h5><b>Office & Laboratory</b><br/>JI. H.A.R.M Ayoeb RT 13 Gg. Rahmad No. 2<br/>Kel. Gunung Tabur, Kec. Gunung Tabur<br/>Kab. Berau, Kalimantan Timur 77352</div>",
                            "geometry_type":"Point"
                            }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates":  [ 117.59152,3.31332 ]
                            },
                            "properties": {
                            "type":"Feature",
                            "description":"<div style='text-align:left;'><h5>Tarakan</h5><b>Office</b><br/>JI. Flamboyan No. 57 RT 27<br/>Kel. Karang Anyar, Kec. Tarakan Barat<br/>Tarakan, Kalimantan Utara 77111<br/>(+62 511) 25210</div>",
                            "geometry_type":"Point"
                            }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates":  [ 116.5610, 0.3016 ]
                            },
                            "properties": {
                            "type":"Feature",
                            "description":"<div style='text-align:left;'><h5>Bara Tambang</h5><b>Office</b><br/>Senyiur KM 00 Jetty PT Bayan Resources Tbk<br/>Desa Senyiur, Kec. Muara Ancalong<br/>Kab. Kutai Timur, Kalimantan Timur 75656</div>",
                            "geometry_type":"Point"
                            }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates":  [ 104.030457,1.082828 ]
                            },
                            "properties": {
                                "type":"Feature",
                                "description":"<div style='text-align:left;'><h5>Batam</h5><b>Office</b><br/>Taman Golf Residence II Blok R1 No. 32<br/>Kel. Sukajadi, Kec. Batam Kota<br/>Batam, Kepulauan Riau 29444</div>",
                                "geometry_type":"Point"
                            }
                        }
                    ]
                 }
            });

            map.addLayer({
                'id': 'places',
                'type': 'circle',
                'source': 'places',
                'paint': {
                    'circle-color': '#F4DD6D',
                    'circle-radius': 8,
                    'circle-stroke-width': 2,
                    'circle-stroke-color': '#ffffff'
                }
            });

            var popup = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false,
                className: 'popups'
            });

            map.on('mouseenter', 'places', function (e) {
                map.getCanvas().style.cursor = 'pointer';
                 
                var coordinates = e.features[0].geometry.coordinates.slice();
                var description = e.features[0].properties.description;
                 
                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                 
                // Populate the popup and set its coordinates
                // based on the feature found.
                popup.setLngLat(coordinates)
                    .setHTML(description)
                    .addTo(map);
                });
                 
                map.on('mouseleave', 'places', function () {
                map.getCanvas().style.cursor = '';
                popup.remove();
            });

        });
    }

    render() {
        return (
            <>
                <div  style={{margin: "auto", alignContent: "center"}}>
                    <Row>
                        <div className="map-wrapper">
                            <div id="map" ref={el => this.mapContainer = el}/>
                        </div>
                    </Row>
                    <Row md={3} className="list-branch">
                        {data.branches && data.branches.map(item => {
                            return (
                                <Col>
                                    <div>
                                        <div className="title-branch">{item.location}</div>
                                    </div>
                                    <div>
                                        <div className="type-branch">{item.type}</div>
                                    </div>
                                    <div className="address-branch">
                                        {item.address && item.address.map(i => {
                                            return (
                                                <div>
                                                    {i.name} <br/>
                                                    {i.district} <br/>
                                                    {i.province} <br/>
                                                    {i.phone}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </>
        )
    }
}

export default Branch
