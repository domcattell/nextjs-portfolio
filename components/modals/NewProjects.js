import React, { useContext } from 'react';
import { Modal, Form, Button, Container } from 'react-bootstrap';
import TextEditor from '../admin/TextEditor';
import useInputState from '../../hooks/useInputState';
import { ProjectsActions } from '../../context/contexts/projects.context';

const NewProjects = (props) => {
	const [ project, handleChange, handleDesc, reset ] = useInputState({ description: '' });
	const { addProject } = useContext(ProjectsActions);

	const handleSubmit = (e) => {
		e.preventDefault();
		addProject(project);
	};

	return (
		<Modal size="lg" show={props.show} onHide={props.toggle} centered>
			<Modal.Header closeButton>
				<Modal.Title id="example-modal-sizes-title-lg">New Project</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Container>
					<Form onSubmit={handleSubmit}>
						<Form.Group>
							<Form.Control
								name="title"
								value={project.title}
								onChange={handleChange}
								type="text"
								placeholder="Title"
							/>
						</Form.Group>

						<Form.Group>
							<Form.Control
								name="code"
								value={project.code}
								onChange={handleChange}
								type="text"
								placeholder="Source Link"
							/>
						</Form.Group>

						<Form.Group>
							<Form.Control
								name="demo"
								value={project.demo}
								onChange={handleChange}
								type="text"
								placeholder="Demo Link"
							/>
						</Form.Group>

						<Form.Group>
							<TextEditor value={project.description} onChange={handleDesc} />
						</Form.Group>

						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Container>
			</Modal.Body>
		</Modal>
	);
};

export default NewProjects;
