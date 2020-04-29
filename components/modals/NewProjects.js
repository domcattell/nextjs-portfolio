import React, { useContext } from 'react';
import { Form, Modal, Button, Container } from 'react-bootstrap';
import TextEditor from '../admin/TextEditor';
import useInputState from '../../hooks/useInputState';
import { ProjectsActions } from '../../context/contexts/projects.context';

const NewProjects = (props) => {
	const [ project, handleChange, handleDesc, resetForm, fileChange ] = useInputState({});
	const { addProject } = useContext(ProjectsActions);

	const handleSubmit = (e) => {
		e.preventDefault();
		const form_data = new FormData(newProjectForm);
		form_data.set('description', project.description);
		// form_data.set('title', project.title);
		// form_data.set('code', project.code);
		// form_data.set('demo', project.demo);
		// form_data.append('projectImg', project.projectImg);
		addProject(form_data);
	};

	return (
		<Modal size="lg" show={props.show} onHide={props.toggle} centered style={{ zIndex: '9999' }}>
			<Modal.Header closeButton>
				<Modal.Title id="new-project">New Portfolio Project</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Container>
					<Form id="newProjectForm" onSubmit={handleSubmit}>
						<Form.Group>
							<Form.Control
								name="title"
								value={project.title || ''}
								onChange={handleChange}
								type="text"
								placeholder="Title"
							/>
						</Form.Group>

						<Form.Group>
							<Form.Control
								name="code"
								value={project.code || ''}
								onChange={handleChange}
								type="text"
								placeholder="Source Link"
							/>
						</Form.Group>

						<Form.Group>
							<Form.Control
								name="demo"
								value={project.demo || ''}
								onChange={handleChange}
								type="text"
								placeholder="Demo Link"
							/>
						</Form.Group>

						<Form.Group>
							<TextEditor 
								value={project.description || ''} 
								onChange={handleDesc} 
							/>
						</Form.Group>

						<Form.Group>
							<input 
								type="file" 
								name="projectImg" 
								onChange={fileChange} 
							/>
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
