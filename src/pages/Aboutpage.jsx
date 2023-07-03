import { Outlet, Link } from 'react-router-dom';
import styled from "@emotion/styled";
import { FaTimes } from "react-icons/fa";

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #000;
  padding: 1rem 0.5rem;
`;

const ModalBody = styled.div`
  font-size: 1.25rem;
  padding: 1rem 0.5rem;
`;

const Modal = () => {
  return (
    <div>
      <ModalHeader>
        <FaTimes />
      </ModalHeader>
      <ModalBody>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
        culpa pariatur repellat repudiandae praesentium, ratione quibusdam esse
        voluptatibus iure recusandae? Impedit laboriosam non nobis ex odit
        veniam incidunt, a consequatur, saepe doloremque harum? Illo, nihil.
        Reiciendis, vel quod doloribus dolores labore officia repellat tempore
        sit expedita harum earum sed cumque?
      </ModalBody>
    </div>
  );
};

const About = () => {
    return (
        <div>
            <h1>About us</h1>
            <ul>
                <li><Link to="contacts">Our Contacts</Link></li>
                <li><Link to="team">Our Team</Link></li>
            </ul>

            {/* <Routes>
                <Route path="contacts" element={<p>Our contact</p>} />
                <Route path="team" element={<p>Our team</p>} />
            </Routes> */}
            <Outlet />
        </div>
    )
}

export {About}
export default About;