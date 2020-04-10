import React, { useContext, useState } from 'react';
import { Modal, Form, Button, Container } from 'react-bootstrap';
import TextEditor from '../admin/TextEditor';
import useInputState from '../../hooks/useInputState';
import { ProjectsActions } from '../../context/contexts/projects.context';

const NewProjects = (props) => {
	const [ project, handleChange, handleDesc, reset, fileChange ] = useInputState({ description: '', projectImg: ''});
	const { addProject } = useContext(ProjectsActions);
	
	const handleSubmit = (e) => {
		e.preventDefault();
		const form_data = new FormData();
		form_data.append('projectImg', project.projectImg);
		form_data.append('title', project.title)
		form_data.append('code', project.code)
		form_data.append('demo', project.demo)
		form_data.append('description', project.description)
		addProject(form_data);
	};

	return (
		<Modal size="lg" show={props.show} onHide={props.toggle} centered>
			<Modal.Header closeButton>
				<Modal.Title id="example-modal-sizes-title-lg">New Portfolio Project</Modal.Title>
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

						<input type="file" onChange={fileChange}/>

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
