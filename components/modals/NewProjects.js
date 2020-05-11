import React, { useContext } from 'react';
import { Form, Modal, Button, Container, Alert } from 'react-bootstrap';
import TextEditor from '../admin/TextEditor';
import useInputState from '../../hooks/useInputState';
import { ProjectsActions, ProjectsContext } from '../../context/contexts/projects.context';
import styles from '../../styles/components/admin_newproject.module.scss';

const NewProjects = (props) => {
	const [ project, handleChange, handleDesc, resetForm, fileChange ] = useInputState({});
	const { addProject, clearProjectMsg } = useContext(ProjectsActions);
	const { projectsMsg } = useContext(ProjectsContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		const form_data = new FormData(newProjectForm);
		form_data.set('description', project.description);
		addProject(form_data);
	};

	const close = () => {
		props.toggle();
		clearProjectMsg();
	};

	return (
		<Modal size="lg" show={props.show} onHide={close} centered style={{ zIndex: '9999' }}>
			<Modal.Header closeButton>
				<Modal.Title id="new-project">New Portfolio Project</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Container>
					<Form id="newProjectForm" onSubmit={handleSubmit}>
						{projectsMsg && <Alert variant="warning">{projectsMsg.msg}</Alert>}
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
							<TextEditor value={project.description || ''} onChange={handleDesc} />
						</Form.Group>

						<Form.Group>
							<div className={styles.newproject__submit}>
								<div>
									<Button variant="primary" type="submit">
										Create Project
									</Button>
								</div>
								<div>
									<Form.File id="formcheck-api-custom" custom>
										<Form.File.Input
											accept=".jpg,.jpeg,.png"
											name="projectImg"
											onChange={fileChange}
										/>
										<Form.File.Label data-browse="Upload Image">
											{project.projectImg ? 'Image Added' : 'Add an Image'}
										</Form.File.Label>
									</Form.File>
								</div>
							</div>
						</Form.Group>
					</Form>
				</Container>
			</Modal.Body>
		</Modal>
	);
};

export default NewProjects;
