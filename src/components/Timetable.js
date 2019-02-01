import React, { Component } from 'react'

export default class Timetable extends Component {
  render() {
    return (
      <div>
        <div className="container timetable">
          <div className="row">
            <div className="container timetable-title text-center">
              <h1>Urejanje urnika delavcev</h1>
            </div>
          </div>
          <div className="container timetable-main-area">

            <div className="row timetable--legend mb-4 pt-4 border-top sticky">
              <div className="col-2 timetable-main-area--edit border-right">
              <button type="button" class="btn btn-primary">Seznam delavcev</button>
              </div>
              <div className="col-10 hours">
                <div className="hours-start">
                  08:30
                </div>
                <div className="hours-middle">
                  15:00
                </div>
                <div className="hours-end">
                  22:00
                </div>
              </div>
            </div>

            <div className="row timetable--explain mb-4 pt-4 border-top">
              <div className="col-2 timetable-main-area--edit border-right">

              </div>
              <div className="col-10 hours">
                <h2>Grafični prikaz dela delavcev</h2>
              </div>
            </div>
            
            <div className="row timetable--monday mb-4 pt-4 border-top">
              <div className="col-2 timetable-main-area--edit border-right">
                <h3>Ponedeljek</h3>
                <button type="button" class="btn btn-primary">Dodaj delavca</button>
              </div>

              <div className="col-10">
                <div className="container">
                  <div className="row timetable-main-area--worker mb-2">
                    <div className="timetable-main-area--worker--display worker-one text-center">
                      <p>Anže Fajfar</p>
                      <div className="timetable-main-area--worker-info-box">
                        <span>Od 8:30 do 15:00</span>
                      </div>
                    </div>
                  </div>
                  <div className="row timetable-main-area--worker mb-2">
                    <div className="timetable-main-area--worker--display worker-two text-center">
                      <p>Nal premik</p>
                      <div className="timetable-main-area--worker-info-box">
                        <span>Od 9:00 do 15:00</span>
                      </div>
                    </div>
                  </div>
                  <div className="row timetable-main-area--worker mb-2">
                    <div className="timetable-main-area--worker--display worker-three text-center">
                      <p>Marjan Novak</p>
                      <div className="timetable-main-area--worker-info-box">
                        <span>Od 15:00 do 22:00</span>
                      </div>
                    </div>
                  </div>
                  <div className="row timetable-main-area--worker mb-2">
                    <div className="timetable-main-area--worker--display worker-four text-center">
                      <p>Janez Kovač</p>
                      <div className="timetable-main-area--worker-info-box">
                        <span>Od 17:00 do 22:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="row timetable--tuesday mb-4 pt-4 border-top">
              <div className="col-2 timetable-main-area--edit border-right">
                <h3>Torek</h3>
                <button type="button" class="btn btn-primary">Dodaj delavca</button>
              </div>
              <div className="col-10">
                <div className="container">
                  <div className="row timetable-main-area--worker mb-2">
                    <div className="timetable-main-area--worker--display worker-one text-center">
                      <p>Anže Fajfar</p>
                    </div>
                  </div>
                  <div className="row timetable-main-area--worker mb-2">
                    <div className="timetable-main-area--worker--display worker-two text-center">
                      <p>Nal premik</p>
                    </div>
                  </div>
                  <div className="row timetable-main-area--worker mb-2">
                    <div className="timetable-main-area--worker--display worker-three text-center">
                      <p>Marjan Novak</p>
                    </div>
                  </div>
                  <div className="row timetable-main-area--worker mb-2">
                    <div className="timetable-main-area--worker--display worker-four text-center">
                      <p>Janez Kovač</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="row timetable--wednesday mb-4 pt-4 border-top">
              <div className="col-2 timetable-main-area--edit border-right">
                <h3>Sreda</h3>
                <button type="button" class="btn btn-primary">Dodaj delavca</button>
              </div>
              <div className="col-10">
                <div className="container">
                  <div className="row timetable-main-area--worker mb-2">
                    <div className="timetable-main-area--worker--display worker-one text-center">
                      <p>Anže Fajfar</p>
                    </div>
                  </div>
                  <div className="row timetable-main-area--worker mb-2">
                    <div className="timetable-main-area--worker--display worker-two text-center">
                      <p>Nal premik</p>
                    </div>
                  </div>
                  <div className="row timetable-main-area--worker mb-2">
                    <div className="timetable-main-area--worker--display worker-three text-center">
                      <p>Marjan Novak</p>
                    </div>
                  </div>
                  <div className="row timetable-main-area--worker mb-2">
                    <div className="timetable-main-area--worker--display worker-four text-center">
                      <p>Janez Kovač</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="row timetable--thursday mb-4 pt-4 border-top">
              <div className="col-2 timetable-main-area--edit border-right">
                <h3>Četrtek</h3>
                <button type="button" class="btn btn-primary">Dodaj delavca</button>
              </div>
              <div className="col-10">
                <div className="container">
                  <div className="row timetable-main-area--worker mb-2">
                    <div className="timetable-main-area--worker--display worker-one text-center">
                      <p>Anže Fajfar</p>
                    </div>
                  </div>
                  <div className="row timetable-main-area--worker mb-2">
                    <div className="timetable-main-area--worker--display worker-two text-center">
                      <p>Nal premik</p>
                    </div>
                  </div>
                  <div className="row timetable-main-area--worker mb-2">
                    <div className="timetable-main-area--worker--display worker-three text-center">
                      <p>Marjan Novak</p>
                    </div>
                  </div>
                  <div className="row timetable-main-area--worker mb-2">
                    <div className="timetable-main-area--worker--display worker-four text-center">
                      <p>Janez Kovač</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row timetable--friday mb-4 pt-4 border-top">
              <div className="col-2 timetable-main-area--edit border-right">
                <h3>Petek</h3>
                <button type="button" class="btn btn-primary">Dodaj delavca</button>
              </div>
              <div className="col-10">
                <div className="container">
                  <div className="row timetable-main-area--worker mb-2">
                    <div className="timetable-main-area--worker--display worker-one text-center">
                      <p>Anže Fajfar</p>
                    </div>
                  </div>
                  <div className="row timetable-main-area--worker mb-2">
                    <div className="timetable-main-area--worker--display worker-two text-center">
                      <p>Nal premik</p>
                    </div>
                  </div>
                  <div className="row timetable-main-area--worker mb-2">
                    <div className="timetable-main-area--worker--display worker-three text-center">
                      <p>Marjan Novak</p>
                    </div>
                  </div>
                  <div className="row timetable-main-area--worker mb-2">
                    <div className="timetable-main-area--worker--display worker-four text-center">
                      <p>Janez Kovač</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row timetable--saturday mb-4 pt-4 border-top">
              <div className="col-2 timetable-main-area--edit border-right">
                <h3>Sobota</h3>
                <button type="button" class="btn btn-primary">Dodaj delavca</button>
              </div>
              <div className="col-10">
                <div className="container">
                  <div className="row timetable-main-area--worker mb-2">
                    <div className="timetable-main-area--worker--display worker-one text-center">
                      <p>Anže Fajfar</p>
                    </div>
                  </div>
                  <div className="row timetable-main-area--worker mb-2">
                    <div className="timetable-main-area--worker--display worker-two text-center">
                      <p>Nal premik</p>
                    </div>
                  </div>
                  <div className="row timetable-main-area--worker mb-2">
                    <div className="timetable-main-area--worker--display worker-three text-center">
                      <p>Marjan Novak</p>
                    </div>
                  </div>
                  <div className="row timetable-main-area--worker mb-2">
                    <div className="timetable-main-area--worker--display worker-four text-center">
                      <p>Janez Kovač</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
