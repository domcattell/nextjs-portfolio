import React, {useContext, useEffect} from 'react';
import { Form, Modal, Button, Container, Alert } from 'react-bootstrap';
import TextEditor from '../admin/TextEditor';
import useInputState from '../../hooks/useInputState';
import { ProjectsActions, ProjectsContext } from '../../context/contexts/projects.context';
import styles from '../../styles/components/admin_newproject.module.scss';

const EditProject = (props) => {
	const [ projectDetails, handleChange, handleDesc, resetForm, fileChange ] = useInputState({});
	const { editProject, getProject, clearProjectMsg, clearProject } = useContext(ProjectsActions);
	const { projectsMsg, project } = useContext(ProjectsContext);

	const handleSubmit = (e) => {
		e.preventDefault();
	}

	const close = () => {
		props.toggle();
		clearProjectMsg();
		clearProject();
	}

	useEffect(() => {
		getProject(props.url);
	},[])
	
	console.log(project.title);

	return (
		<Modal size="lg" show={props.show} onHide={close} centered style={{ zIndex: '9999' }}>
			<Modal.Header closeButton>
				<Modal.Title id="new-project">Edit {props.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Container>
					<Form id="newProjectForm" onSubmit={handleSubmit}>
						{projectsMsg && <Alert variant="warning">{projectsMsg.msg}</Alert>}
						<Form.Group>
							<Form.Control
								name="title"
								value={projectDetails.title || ''}
								onChange={handleChange}
								type="text"
								placeholder="title"
							/>
						</Form.Group>

						<Form.Group>
							<Form.Control
								name="code"
								value={projectDetails.code || ''}
								onChange={handleChange}
								type="text"
								placeholder="Source Link"
							/>
						</Form.Group>

						<Form.Group>
							<Form.Control
								name="demo"
								value={projectDetails.demo || ''}
								onChange={handleChange}
								type="text"
								placeholder="Demo Link"
							/>
						</Form.Group>

						<Form.Group>
							<TextEditor value={projectDetails.description || ''} onChange={handleDesc} />
						</Form.Group>

						<Form.Group>
							<div className={styles.newproject__submit}>
								<Button variant="primary" type="submit">
									Create Project
								</Button>
								<div className={styles.newproject__file}>
									<Button variant="outline-primary">Upload Image</Button>
									<input type="file" name="projectImg" onChange={fileChange} />
								</div>
							</div>
						</Form.Group>
					</Form>
				</Container>
			</Modal.Body>
		</Modal>
	);
}

export default EditProject;
