import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';
class ProfileCompanyHeader extends Component {
  render() {
    const { profileCompany } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body text-white mb-3">
              <div className="row">
                <div className="col-4 col-md-3 m-auto">
                  <img
                    className="rounded-circle"
                    src="//www.gravatar.com/avatar/b8aeec8b91548b073d2b7e42f9d1328d?s=200&r=pg&d=mm"
                    // src={(profileCompany && profileCompany.company.avatar) || "//www.gravatar.com/avatar/b8aeec8b91548b073d2b7e42f9d1328d?s=200&r=pg&d=mm"}
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center">
                <h1 className="display-4 text-center">
                  {profileCompany.company.name}
                </h1>

                {isEmpty(profileCompany.location) ? null : (
                  <p>{profileCompany.location}</p>
                )}
                <p>
                  {isEmpty(profileCompany.website) ? null : (
                    <a
                      className="text-white p-2"
                      href={profileCompany.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-globe fa-2x" />
                    </a>
                  )}

                  {isEmpty(
                    profileCompany.social && profileCompany.social.twitter
                  ) ? null : (
                    <a
                      className="text-white p-2"
                      href={profileCompany.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter fa-2x" />
                    </a>
                  )}

                  {isEmpty(
                    profileCompany.social && profileCompany.social.facebook
                  ) ? null : (
                    <a
                      className="text-white p-2"
                      href={profileCompany.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook fa-2x" />
                    </a>
                  )}

                  {isEmpty(
                    profileCompany.social && profileCompany.social.linkedin
                  ) ? null : (
                    <a
                      className="text-white p-2"
                      href={profileCompany.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin fa-2x" />
                    </a>
                  )}

                  {isEmpty(
                    profileCompany.social && profileCompany.social.youtube
                  ) ? null : (
                    <a
                      className="text-white p-2"
                      href={profileCompany.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-youtube fa-2x" />
                    </a>
                  )}

                  {isEmpty(
                    profileCompany.social && profileCompany.social.instagram
                  ) ? null : (
                    <a
                      className="text-white p-2"
                      href={profileCompany.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram fa-2x" />
                    </a>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProfileCompanyHeader;
